import { defineType } from 'sanity'

export const aboutIntro = defineType({
  name: 'aboutIntro',
  title: 'About Intro',
  type: 'document',
  fields: [
    {
      name: 'breadcrumbTitle',
      title: 'Breadcrumb Title',
      type: 'string',
      description: 'Title for the breadcrumb (e.g., "About Us").',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading text (e.g., "We are APCS").',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Primary image displayed on the about intro section.',
    },
    {
      name: 'sideImages',
      title: 'Side Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Two side images displayed alongside the main image.',
      validation: (Rule) => Rule.required().min(2).max(2),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
