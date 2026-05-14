import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Extreme validation for projectId to prevent Sanity client from crashing the entire app
const rawProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const isValidId = rawProjectId && /^[a-z0-9-]+$/.test(rawProjectId) && rawProjectId !== 'your-project-id';

export const client = isValidId ? createClient({
  projectId: rawProjectId,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-14',
}) : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source) {
  if (builder && source) {
    try {
      return builder.image(source);
    } catch (e) {
      console.error("Image builder error:", e);
    }
  }
  return { url: () => '' };
}

// GROQ Queries
export const queries = {
  allBlogs: `*[_type == "blog"] | order(publishedDate desc) {
    title,
    slug,
    excerpt,
    coverImage,
    category,
    publishedDate
  }`,
  singleBlog: `*[_type == "blog" && slug.current == $slug][0] {
    title,
    content,
    coverImage,
    publishedDate,
    category,
    seoTitle,
    seoDescription
  }`,
  allServices: `*[_type == "service"] | order(orderRank) {
    title,
    description,
    icon
  }`,
  allTestimonials: `*[_type == "testimonial"] {
    name,
    role,
    content,
    avatar
  }`,
  siteSettings: `*[_type == "siteSettings"][0]`
};

// Fetch Utilities - Always return safe promises
export const fetchBlogs = () => (client && isValidId) ? client.fetch(queries.allBlogs) : Promise.resolve([]);
export const fetchBlogBySlug = (slug) => (client && isValidId) ? client.fetch(queries.singleBlog, { slug }) : Promise.resolve(null);
export const fetchSiteSettings = () => (client && isValidId) ? client.fetch(queries.siteSettings) : Promise.resolve({});
export const fetchServices = () => (client && isValidId) ? client.fetch(queries.allServices) : Promise.resolve([]);
export const fetchTestimonials = () => (client && isValidId) ? client.fetch(queries.allTestimonials) : Promise.resolve([]);
