import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'AVP Tech Solution Admin',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: [
      {
        name: 'blog',
        title: 'Blog',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() },
          { name: 'author', title: 'Author', type: 'string' },
          { 
            name: 'categories', 
            title: 'Categories', 
            type: 'array', 
            of: [{ type: 'string' }] 
          },
          { name: 'excerpt', title: 'Excerpt', type: 'text' },
          { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
          { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
          { name: 'publishedAt', title: 'Published At', type: 'datetime' },
          { name: 'seoTitle', title: 'SEO Title', type: 'string' },
          { name: 'seoDescription', title: 'SEO Description', type: 'text' },
        ],
      },
      {
        name: 'service',
        title: 'Service',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'icon', title: 'Icon (Lucide Name)', type: 'string' },
          { name: 'orderRank', title: 'Order Rank', type: 'number' },
        ],
      },
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'document',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'role', title: 'Role', type: 'string' },
          { name: 'content', title: 'Content', type: 'text' },
          { name: 'avatar', title: 'Avatar', type: 'image' },
        ],
      },
      {
        name: 'siteSettings',
        title: 'Site Settings',
        type: 'document',
        fields: [
          { name: 'title', title: 'Site Title', type: 'string' },
          { name: 'description', title: 'Meta Description', type: 'text' },
          { name: 'logo', title: 'Logo', type: 'image' },
          { name: 'contactEmail', title: 'Contact Email', type: 'string' },
        ],
      },
      {
        name: 'caseStudy',
        title: 'Case Study',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
          { name: 'description', title: 'Description', type: 'text' },
          { name: 'image', title: 'Image', type: 'image' },
        ],
      }
    ],
  },
})
