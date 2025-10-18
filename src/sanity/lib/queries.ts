import { client } from "./client";

export async function getProjects() {
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    slug,
    category,
    title,
    description,
    logo {
      asset-> {
        url
      }
    },
    metadata {
      role,
      duration,
      team,
      results
    },
    thumbnailImage {
      asset-> {
        url
      }
    },
    content,
    featured,
    order
  }`;

  return await client.fetch(query);
}

export async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    slug,
    category,
    title,
    description,
    logo {
      asset-> {
        url
      }
    },
    metadata {
      role,
      duration,
      team,
      results
    },
    thumbnailImage {
      asset-> {
        url
      }
    },
    content,
    featured,
    order
  }`;

  return await client.fetch(query, { slug });
}

export async function getFeaturedProjects() {
  const query = `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    slug,
    category,
    title,
    description,
    logo {
      asset-> {
        url
      }
    },
    thumbnailImage {
      asset-> {
        url
      }
    },
    featured,
    order
  }`;

  return await client.fetch(query);
}

export async function getWritingPosts() {
  const query = `*[_type == "writing"] | order(date desc) {
    _id,
    slug,
    title,
    date,
    excerpt,
    featuredImage {
      asset-> {
        url
      },
      alt
    },
    content,
    featured,
    order
  }`;

  return await client.fetch(query);
}

export async function getWritingPostBySlug(slug: string) {
  const query = `*[_type == "writing" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    date,
    excerpt,
    featuredImage {
      asset-> {
        url
      },
      alt
    },
    content,
    featured,
    order
  }`;

  return await client.fetch(query, { slug });
}

export async function getFeaturedWritingPosts() {
  const query = `*[_type == "writing" && featured == true] | order(date desc) {
    _id,
    slug,
    title,
    date,
    excerpt,
    featuredImage {
      asset-> {
        url
      },
      alt
    },
    featured,
    order
  }`;

  return await client.fetch(query);
}
