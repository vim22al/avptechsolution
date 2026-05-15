import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Safe Project ID check to prevent app crash if credentials are missing
const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || 'a9im6hyq';

let client;
try {
  client = createClient({
    projectId: PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2023-05-14',
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
  if (!client) return [];
  try {
    const query = `*[_type == "blog"] | order(publishedAt desc) {
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
  if (!client || !slug) return null;
  try {
    const query = `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "author": author->name,
      "authorImage": author->image,
      "categories": categories[]->title,
      seo
    }`;
    return await client.fetch(query, { slug });
  } catch (err) {
    console.error("Sanity post fetch error:", err);
    return null;
  }
};

export { client };
