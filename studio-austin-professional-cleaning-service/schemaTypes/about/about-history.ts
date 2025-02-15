import { defineType } from 'sanity'

export const aboutHistory = defineType({
  name: 'aboutHistory',
  title: 'About History',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the history section (e.g., "Our Journey Through the Years").',
    },
    {
      name: 'description',
      title: 'Description',
      // Changed type from "text" to an array of block content to allow rich text formatting
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'A rich text description of the timeline (e.g., "A timeline of <strong>Austin Professional Cleaning Services</strong> milestones and achievements.").',
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'timelineItem',
          title: 'Timeline Item',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'number',
              description: 'The year of the milestone.',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              description: 'Description of the milestone.',
            }
          ],
          preview: {
            select: {
              title: 'year',
              subtitle: 'content'
            }
          }
        }
      ],
      description: 'A list of timeline items for the history of the company.',
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  },
})
