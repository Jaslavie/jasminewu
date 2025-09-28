// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { LiveQueryProvider, useLiveQuery } from "@sanity/preview-kit";
import { client } from "./client";

export { LiveQueryProvider, useLiveQuery };
