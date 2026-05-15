import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'AVP Tech Solution Admin',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'a9im6hyq',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: [
      // BLOG POST SCHEMA
      {
        name: 'blog',
        title: 'Blog Post',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() },
          { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
          { 
            name: 'mainImage', 
            title: 'Main Image', 
            type: 'image', 
            options: { hotspot: true },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative Text',
              }
            ]
          },
          { 
            name: 'categories', 
            title: 'Categories', 
            type: 'array', 
            of: [{ type: 'reference', to: [{ type: 'category' }] }] 
          },
          { name: 'publishedAt', title: 'Published at', type: 'datetime' },
          { name: 'excerpt', title: 'Excerpt', type: 'text' },
          { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
          { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } },
          {
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            fields: [
              { name: 'metaTitle', title: 'Meta Title', type: 'string' },
              { name: 'metaDescription', title: 'Meta Description', type: 'text' },
              { name: 'shareImage', title: 'Social Share Image', type: 'image' },
            ]
          }
        ],
        preview: {
          select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
          },
          prepare(selection) {
            const {author} = selection
            return {...selection, subtitle: author && `by ${author}`}
          },
        },
      },
      // AUTHOR SCHEMA
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          { name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() },
          { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
          { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          { name: 'bio', title: 'Bio', type: 'array', of: [{ type: 'block' }] },
        ],
      },
      // CATEGORY SCHEMA
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
          { name: 'description', title: 'Description', type: 'text' },
        ],
      },
      // EXISTING SCHEMAS (Kept for compatibility)
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
    ],
  },
})
