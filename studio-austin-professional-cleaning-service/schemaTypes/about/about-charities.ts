import { defineType } from 'sanity'

export const aboutCharities = defineType({
  name: 'aboutCharities',
  title: 'About Charities',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'The heading for the charities section (e.g., "Charities We Proudly Support").',
    },
    {
      name: 'description',
      title: 'Description',
      // Changed to rich text: an array of block content.
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'A rich text description for the charities section. You can include formatting (e.g., bold text).',
    },
    {
      name: 'charities',
      title: 'Charities',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'charity',
          title: 'Charity',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'The name of the charity.',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              description: 'The image for the charity.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'A short description of the charity.',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description'
            }
          }
        }
      ],
      description: 'An array of charity items.',
    },
  ],
  preview: {
    select: {
      title: 'heading'
    }
  },
})
