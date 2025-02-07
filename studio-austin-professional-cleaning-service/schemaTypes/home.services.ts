import { defineType } from 'sanity'

export const homeServices = defineType({
  name: 'homeServices',
  title: 'Home Services',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description:
        'Main heading for the services section (e.g., "Your One-Stop Solution for Cleanliness").',
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      description:
        'Subtitle or heading for the services details (e.g., "What Services We Offer").',
    },
    {
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Detailed description for the services section. This text supports rich formatting.',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          fields: [
            {
              name: 'head',
              title: 'Head',
              type: 'string',
              description:
                'Service title (e.g., "Janitorial Cleaning Services").',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'string',
              description:
                'A short description of the service (e.g., "Comprehensive cleaning tailored to your needs.").',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description:
                'Link to the service details page (e.g., "/services/janitorial-cleaning-services").',
            },
          ],
          preview: {
            select: {
              title: 'head',
              subtitle: 'content',
            },
          },
        },
      ],
      description:
        'A list of services offered. Each service includes a title, description, and URL. (Note: The image field from your original JSON is intentionally omitted.)',
    },
    {
      name: 'ctaButtons',
      title: 'Call-to-Action Buttons',
      type: 'object',
      fields: [
        {
          name: 'buttonOneText',
          title: 'Button One Text',
          type: 'string',
          description:
            'Text for the first call-to-action button (e.g., "Quote Now").',
        },
        {
          name: 'buttonOneUrl',
          title: 'Button One URL',
          type: 'string',
          description:
            'URL for the first call-to-action button (e.g., "/janitorial-quote").',
        },
        {
          name: 'buttonTwoText',
          title: 'Button Two Text',
          type: 'string',
          description:
            'Text for the second call-to-action button (e.g., "Learn more about APCS").',
        },
        {
          name: 'buttonTwoUrl',
          title: 'Button Two URL',
          type: 'string',
          description:
            'URL for the second call-to-action button (e.g., "/about-us").',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
})
