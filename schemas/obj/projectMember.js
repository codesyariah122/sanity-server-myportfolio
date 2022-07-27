export default {
  type: 'object',
  name: 'projectMember',
  title: 'Project Member',
  fields: [
    {
      title: 'Person',
      name: 'person',
      type: 'reference',
      to: {type: 'person'}
    },
    {
      title: 'Roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'radio',
        list: [
          {title: 'Backend Programmer', value: 'backend-programmer'},
          {title: 'Frontend Programmer', value: 'frontend-programmer'},
          {title: 'Backend Developer', value: 'backend-developer'},
          {title: 'Frontend Developer', value: 'frontend-developer'},
          {title: 'Fullstack Developer', value: 'fullstack-developer'},
          {title: 'Devops', value: 'dev-ops'},
          {title: 'Designer', value: 'designer'},
          {title: 'Editor', value: 'editor'},
          {title: 'Manager', value: 'manager'},
          {title: 'Director', value: 'director'},
          {title: 'Owner', value: 'owner'}
        ]
      }
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      roles: 'roles',
      media: 'person.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/')
      }
    }
  }
}
