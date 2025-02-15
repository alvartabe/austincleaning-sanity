import { defineType } from 'sanity'

export const windowCleaningService = defineType({
  name: 'windowCleaningService',
  title: 'Window Cleaning Service',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The title of the service page (e.g., "Window Cleaning Service").',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageTitle',
        maxLength: 96,
      },
      description: 'Unique URL identifier for this service page.',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Background image for the hero section.',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Detailed description for the hero section. This can be a rich text block to allow for formatting.',
    },
    {
      name: 'offeredServices',
      title: 'Offered Services',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'List of window cleaning services offered (e.g., Commercial Window Cleaning, Construction Window Cleaning).',
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'ctaText',
          title: 'CTA Text',
          type: 'string',
          description: 'Text to display on the call-to-action button.',
        },
        {
          name: 'ctaLink',
          title: 'CTA Link',
          type: 'string',
          description: 'URL for the call-to-action button.',
        },
      ],
      description: 'Settings for the call-to-action button (e.g., "Quote Now!").',
    },
    {
      name: 'contactNumbers',
      title: 'Contact Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactNumber',
          fields: [
            {
              name: 'city',
              title: 'City',
              type: 'string',
              description: 'City name (e.g., "Austin").',
            },
            {
              name: 'number',
              title: 'Phone Number',
              type: 'string',
              description: 'Phone number for this location.',
            },
          ],
          preview: {
            select: {
              title: 'city',
              subtitle: 'number',
            },
          },
        },
      ],
      description: 'List of phone numbers with corresponding cities.',
    },
   
    {
      name: 'whyChooseHeading',
      title: 'Why Choose Heading',
      type: 'string',
      description:
        'Heading for the "Why Choose Our Janitorial Cleaning Programs" section.',
    },
    {
      name: 'whyChooseDescription',
      title: 'Why Choose Description',
      type: 'text',
      description:
        'Subheading or description for the "Why Choose" section that explains the benefits.',
    },
    {
      name: 'secondaryImage',
      title: 'Why Choose Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Secondary image for the rounded circle display.',
    },
    {
      name: 'whyChooseFeatures',
      title: 'Why Choose Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              description: 'Icon image for this feature.',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Title for the feature (e.g., "Initial Deep Cleaning").',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Short description for the feature.',
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
        'A list of features or benefits that explain why customers should choose this service.',
    },
    {
      name: 'serviceContent',
      title: 'Service Content',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Additional content for the service page. Use block content for rich text editing.',
    },
  ],
  preview: {
    select: {
      title: 'pageTitle',
    },
  },
})
