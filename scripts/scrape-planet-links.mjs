#!/usr/bin/env node

/**
 * Scrapes Open Graph metadata (title, description, image) from URLs
 * in src/data/planetLinks.json and writes the enriched data back.
 *
 * Usage: node scripts/scrape-planet-links.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/planetLinks.json");
const MAX_DESC_LENGTH = 100;
const FETCH_TIMEOUT_MS = 10000;

function extractMeta(html, property) {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']${property}["']`, "i"),
    new RegExp(`<meta[^>]+name=["']${property}["'][^>]+content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${property}["']`, "i"),
  ];
  for (const re of patterns) {
    const match = html.match(re);
    if (match) return match[1].trim();
  }
  return null;
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
}

function truncate(str, max) {
  if (!str) return str;
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + "…";
}

async function fetchHead(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PlanetLinkScraper/1.0)",
        Accept: "text/html",
      },
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let html = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      html += decoder.decode(value, { stream: true });
      // Stop once we've read past </head> — no need for the full page
      if (html.length > 20000 || html.includes("</head>")) {
        reader.cancel();
        break;
      }
    }

    return html;
  } finally {
    clearTimeout(timeout);
  }
}

function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  return match ? match[1] : null;
}

async function scrapeYouTube(entry, videoId) {
  console.log(`  Scraping (YouTube oEmbed): ${entry.url}`);
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const data = await res.json();
    return {
      ...entry,
      title: data.title || entry.title || "YouTube",
      description: truncate(data.author_name ? `by ${data.author_name}` : "", MAX_DESC_LENGTH),
      image: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch (err) {
    console.warn(`  ⚠ YouTube oEmbed failed: ${err.message}`);
    return {
      ...entry,
      title: entry.title || "YouTube",
      description: "",
      image: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  }
}

async function scrapeLink(entry) {
  const ytId = getYouTubeId(entry.url);
  if (ytId) return scrapeYouTube(entry, ytId);

  console.log(`  Scraping: ${entry.url}`);
  try {
    const html = await fetchHead(entry.url);

    const ogTitle = extractMeta(html, "og:title");
    const ogDesc = extractMeta(html, "og:description") || extractMeta(html, "description");
    const ogImage = extractMeta(html, "og:image");
    const pageTitle = extractTitle(html);

    const title = ogTitle || pageTitle || entry.title;
    const description = truncate(ogDesc || "", MAX_DESC_LENGTH);

    let image = ogImage || null;
    if (image && image.startsWith("/")) {
      const origin = new URL(entry.url).origin;
      image = origin + image;
    }

    return { ...entry, title, description, image };
  } catch (err) {
    console.warn(`  ⚠ Failed to scrape ${entry.url}: ${err.message}`);
    return { ...entry, description: "", image: null };
  }
}

function needsScraping(entry) {
  return !entry.description && !entry.image;
}

async function main() {
  const links = JSON.parse(readFileSync(DATA_PATH, "utf-8"));

  const toScrape = links.filter(needsScraping);
  if (toScrape.length === 0) {
    console.log(`✓ All ${links.length} link(s) already have metadata — skipping.`);
    return;
  }

  console.log(`Scraping ${toScrape.length} of ${links.length} link(s)…\n`);

  const enriched = [];
  for (const link of links) {
    enriched.push(needsScraping(link) ? await scrapeLink(link) : link);
  }

  writeFileSync(DATA_PATH, JSON.stringify(enriched, null, 2) + "\n");
  console.log(`\n✓ Wrote enriched data to ${DATA_PATH}`);
}

main();
