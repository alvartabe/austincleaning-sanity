import { defineType } from 'sanity'

export const aboutTeam = defineType({
  name: 'aboutTeam',
  title: 'About Team',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Heading for the team section (e.g., "Meet the Experts Behind APCS").',
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teamMember',
          title: 'Team Member',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Name of the team member.',
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              description: 'Position or title of the team member.',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'A short bio or description for the team member.',
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'position'
            }
          }
        }
      ],
      description: 'List of team members for the About Team section.',
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  },
})
