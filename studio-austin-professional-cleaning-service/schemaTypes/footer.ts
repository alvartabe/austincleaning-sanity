import { defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'quoteNowButton',
      title: 'Quote Now Button',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Button Label',
          type: 'string',
          description:
            'Text to display on the Quote Now button (e.g., "Quote Now").',
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'string',
          description:
            'Destination URL for the Quote Now button (e.g., "/janitorial-quote").',
        },
      ],
      description: 'Settings for the Quote Now button in the footer.',
    },
    {
      name: 'emails',
      title: 'Emails',
      type: 'object',
      fields: [
        {
          name: 'requestServices',
          title: 'Request Services Email',
          type: 'string',
          description:
            'Email address for service requests (e.g., "quote@austincleaning.net").',
        },
        {
          name: 'accounting',
          title: 'Accounting Email',
          type: 'string',
          description:
            'Email address for accounting inquiries (e.g., "accounting@austincleaning.net").',
        },
      ],
      description: 'Email addresses used in the footer.',
    },
    {
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'object',
      fields: [
        {
          name: 'austin',
          title: 'Austin Phone Number',
          type: 'string',
          description:
            'Phone number for the Austin location (e.g., "512-269-5389").',
        },
        {
          name: 'sanAntonio',
          title: 'San Antonio Phone Number',
          type: 'string',
          description:
            'Phone number for the San Antonio location (e.g., "210-904-3853").',
        },
        {
          name: 'houston',
          title: 'Houston Phone Number',
          type: 'string',
          description:
            'Phone number for the Houston location (e.g., "346-251-0317").',
        },
      ],
      description: 'Phone numbers for the various locations.',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description:
                'Name of the social media platform (e.g., "facebook", "twitter", etc.) used for icon styling.',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description:
                'URL for the social media page (e.g., "https://facebook.com/yourprofile").',
            },
          ],
          preview: {
            select: {
              title: 'icon',
              subtitle: 'url',
            },
          },
        },
      ],
      description:
        'List of social media links with platform names and corresponding URLs.',
    },
  ],
  preview: {
    select: {
      title: 'quoteNowButton.label',
    },
  },
})
