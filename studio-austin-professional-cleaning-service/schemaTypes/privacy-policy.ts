import { defineType } from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Privacy Policy page.',
    },
    {
      name: 'pageDescription',
      title: 'Privacy Policy page description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for the page description: Austin Professional Cleaning Services LLC..."',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              description: 'Title for this section (displayed as h2).',
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: [{ type: 'block' }],
              description: 'Rich text content for this section.',
            },
          ],
        },
      ],
      description: 'A list of sections with a title and rich text content.',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
});
