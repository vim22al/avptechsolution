import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Safe Project ID check to prevent app crash if credentials are missing
const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || 'avp-tech-id'; // Must be a-z, 0-9, or dashes

let client;
try {
  client = createClient({
    projectId: PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
    token: import.meta.env.VITE_SANITY_API_TOKEN, 
  });
} catch (error) {
  console.warn("Sanity client failed to initialize. Blog features will be disabled.", error);
}

const builder = client ? imageUrlBuilder(client) : null;

export const urlFor = (source) => {
  if (!builder || !source) return { url: () => '' };
  return builder.image(source);
};

// Helper for fetching blogs with error handling
export const getBlogs = async () => {
  if (!client || PROJECT_ID === 'avp-tech-id') return [];
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title
    }`;
    return await client.fetch(query);
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return [];
  }
};

export const getBlogPost = async (slug) => {
  if (!client || PROJECT_ID === 'avp-tech-id' || !slug) return null;
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "author": author->name,
      "categories": categories[]->title
    }`;
    return await client.fetch(query, { slug });
  } catch (err) {
    console.error("Sanity post fetch error:", err);
    return null;
  }
};

export { client };
