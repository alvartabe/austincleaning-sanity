import { defineType } from 'sanity'

export const workOrderForm = defineType({
  name: 'workOrderForm',
  title: 'Work Order Form',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      description: 'The title of the service page (e.g., "Work Order").',
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
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
      description: 'The description text.',
    },
    {
      name: 'pageParagraph',
      title: 'Page Paragraph',
      type: 'string',
      description: 'Page paragraph',
    },
    {
      name: 'pagePhoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Phone Number',
    },
  ]
})
