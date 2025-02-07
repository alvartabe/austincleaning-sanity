import { defineType } from 'sanity'

export const homeWhoWeServe = defineType({
  name: 'homeWhoWeServe',
  title: 'Home Who We Serve',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description:
        'Main heading for the section (e.g., "Who We Serve").',
    },
    {
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'string',
      description:
        'Subheading for the section (e.g., "Tailored Cleaning for Every Industry").',
    },
    {
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Detailed description of the section. This text supports rich formatting (e.g., bold, italics) and is displayed below the headings.',
    },
    {
      name: 'listColumn1',
      title: 'List Column 1',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'An array of list items for the first column (e.g., "Office Buildings (Class A, B & C)", "Counseling Centers", "Restaurants", etc.).',
    },
    {
      name: 'listColumn2',
      title: 'List Column 2',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'An array of list items for the second column (e.g., "Churches & Places of Worship", "Multi-Tenant Facilities", "Medical Facilities", etc.).',
    },
  ],
})
