import { defineType } from 'sanity'

export const homeStats = defineType({
  name: 'homeStats',
  title: 'Home Stats',
  type: 'document',
  fields: [
    {
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Heading for the stats section (e.g., "What Sets Us Apart").',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Icon image asset for the feature (e.g., an SVG or PNG).',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title for the feature (e.g., "25 years of shared experience").',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'A short description of the feature.',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
      description:
        'An array of features that set us apart. Each feature includes an icon, a title, and a description.',
    },
  ],
})
