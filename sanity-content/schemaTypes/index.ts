export const schemaTypes = [
  {
    name: 'heroVideo',
    title: 'Hero Video',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: { accept: 'video/mp4,video/webm' }
      }
    ]
  },
  {
  name: 'testimonialIcon',
  title: 'Testimonial Icon',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image'
    },
     { name: 'alt', type: 'string', title: 'Alt Text' },
  ]
},
{
  name: 'projectPhoto',
  title: 'Project Photo',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
},
{
    name: 'roofingServices',
    title: 'Roofing Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        initialValue: 'Learn More'
      },
      {
        name: 'buttonHref',
        title: 'Button Href',
        type: 'string',
        description: 'Link for the button (use # for placeholder)'
      }
    ]
  },
  {
    name: 'constructionServices',
    title: 'Construction Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        initialValue: 'Learn More'
      },
      {
        name: 'buttonHref',
        title: 'Button Href',
        type: 'string',
        description: 'Link for the button (use # for placeholder)'
      }
    ]
  },
  {
    name: 'showcaseServices',
    title: 'Showcase Services',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        initialValue: 'Learn More'
      },
      {
        name: 'buttonHref',
        title: 'Button Href',
        type: 'string',
        description: 'Link for the button (use # for placeholder)'
      }
    ]
  }

]
