const showcaseServices = {
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

export { showcaseServices }