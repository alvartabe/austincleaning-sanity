import { defineType } from 'sanity'

export const homeIntro = defineType({
  name: 'home',
  title: 'Home Intro',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading for the hero section (e.g., "Welcome to")',
    },
    {
        name: 'heroTitleAPCS',
        title: 'Hero Title APCS',
        type: 'string',
        description: 'Main heading for the hero section (e.g., "APCS")',
      },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Secondary heading for the hero section (e.g., "Austin Professional Cleaning Services")',
    },
    {
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Tagline text shown below the headings (e.g., "Your Trusted Partner for Immaculate Spaces Across Texas!")',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description for the hero section. This can be a rich text block to allow for formatting.',
    },
    {
        name: 'image1',
        title: 'Image 1',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      }, 
      {
        name: 'image2',
        title: 'Image 2',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      },
      {
        name: 'image3',
        title: 'Image 3',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      },
      {
        name: 'image4',
        title: 'Image 4',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      },
      {
        name: 'image5',
        title: 'Image 5',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      },
      {
        name: 'image6',
        title: 'Image 6',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image asset for this parallax layer.',
      },
  
  ],
})
