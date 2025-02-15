import { defineType } from 'sanity'

export const aboutLocation = defineType({
  name: 'aboutLocation',
  title: 'About Location',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Heading for the location section (e.g., "Our Locations in Texas").',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description text for the location section.',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
