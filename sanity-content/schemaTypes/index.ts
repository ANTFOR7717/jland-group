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
}
  
]
