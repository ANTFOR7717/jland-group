const heroVideo = {
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
}

export { heroVideo }