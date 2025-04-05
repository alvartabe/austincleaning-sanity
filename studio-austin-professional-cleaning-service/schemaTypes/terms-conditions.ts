import { defineType } from 'sanity'

export const termsAndConditions = defineType({
  name: 'termsAndConditions',
  title: 'Terms & Conditions',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the Terms & Conditions page (e.g., "Terms & Conditions").',
    },
    {
      name: 'smsHeading',
      title: 'SMS Terms Heading',
      type: 'string',
      description: 'Heading for the SMS Terms section (e.g., "SMS Terms & Conditions").',
    },
    {
      name: 'smsContent',
      title: 'SMS Terms Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for the SMS Terms, e.g. "By texting START to Austin Professional Cleaning Services LLC, you agree to receive SMS messages related to appointment reminders, updates, and responses to inquiries."',
    },
    {
      name: 'policyContent',
      title: 'Policy Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for the main Terms & Conditions policy.',
    },
    {
      name: 'privacyPolicyText',
      title: 'Privacy Policy Text (Privacy Policy:)',
      type: 'string',
    },
    {
      name: 'privacyPolicyLink',
      title: 'Privacy Policy Link',
      type: 'string',
      description: 'The URL for the Privacy Policy page.',
      initialValue: '/privacy-policy'
    },
    {
      name: 'privacyPolicyLinkText',
      title: 'Privacy Policy Link Text',
      type: 'string',
      description: 'Text for the Privacy Policy link text (View Here)',
    },

  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
});
