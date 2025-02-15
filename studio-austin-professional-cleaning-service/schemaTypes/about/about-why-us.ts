import { defineType } from 'sanity'

export const aboutWhyUs = defineType({
  name: 'aboutWhyUs',
  title: 'About Why Us',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'The heading for the section (e.g., "Why We’re the Right Choice for Your Business").',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      description: 'A short description or subheading for the section.',
    },
    {
      name: 'servicesButton',
      title: 'Services Button',
      type: 'object',
      fields: [
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text to display on the button (e.g., "See all services").',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'URL for the button (e.g., "/#services").',
        },
      ],
      description: 'Configuration for the services button.',
    },
    {
      name: 'serviceCards',
      title: 'Service Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceCard',
          title: 'Service Card',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Icon image for the service card.',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title for the service card.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Short description for the service card.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      description: 'List of service cards for the section.',
    },
  ],
  preview: {
    select: { title: 'heading' },
  },
})
