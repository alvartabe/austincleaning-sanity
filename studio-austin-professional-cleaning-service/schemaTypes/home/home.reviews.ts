import { defineType } from 'sanity'

export const homeReviews = defineType({
  name: 'homeReviews',
  title: 'Home Reviews',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description:
        'Main heading for the section (e.g., "Trusted by Businesses Like Yours").',
    },
  ],
})
