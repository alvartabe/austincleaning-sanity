import { defineType } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Contact Page Data',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title (e.g., "Get in Touch").',
    },
    {
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
      description: 'Short intro text (e.g., "Whether you need a quote...").',
    },
    {
      name: 'emailDescription',
      title: 'Email Description',
      type: 'text',
      description: 'Short text above email list (e.g., "Reach out to the appropriate department...").',
    },
    {
      name: 'departmentEmails',
      title: 'Department Emails',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'department', title: 'Department Name', type: 'string' },
            { name: 'email', title: 'Email Address', type: 'string' },
          ],
        },
      ],
      description: 'List of department emails.',
    },
    {
      name: 'serviceButtons',
      title: 'Service Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Service Name', type: 'string' },
            { name: 'link', title: 'Service Link', type: 'string' },
          ],
        },
      ],
      description: 'List of service buttons for desktop and mobile views.',
    },
    {
      name: 'locations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'city', title: 'City Name', type: 'string' },
            { name: 'phone', title: 'Phone Number', type: 'string' },
            { name: 'hours', title: 'Operating Hours', type: 'string' },
          ],
        },
      ],
      description: 'List of locations with phone numbers and hours.',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Use bx icons, e.g., "facebook", "instagram", "twitter", "youtube".' },
          ],
        },
      ],
      description: 'List of social media links with icons.',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
});
