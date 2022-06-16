export default {
  name: 'skillProgramming',
  title: 'Skill Programming',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'percentage',
      title: 'Percentage',
      type: 'number',
      description: 'Some frontend will require a slug to be set to be able to show the project'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
  ],
  preview: {
    select: {
      title: 'title',
      percentage: 'percentage',
      mainImage: 'mainImage',
      color: 'color'
    },
    prepare({title = 'No title', percentage=0, mainImage=null, color=null}) {
      return {
        title,
        percentage,
        mainImage,
        color
      }
    }
  }
}