export default {
  name: 'projectsDoc',
  title: 'My Projects',
  type: 'document',
  fields: [
    {
      title: 'Name of Project',
      name: 'NameOfProject',
      type: 'string',
      description: 'Enter the name of the project',
    },
    {
      title: 'Image of Project',
      name: 'projectImg',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Description of Project',
      name: 'descOfProject',
      type: 'text',
      description:
        'Type a description of what the project consists of and does.',
    },
    {
      name: 'linkToProject',
      title: 'Link to Working Project',
      type: 'string',
      description:
        'This is a link to the project itself, if not created yet, put "NA"',
    },
    {
      name: 'linkToProjectRepo',
      title: 'Link to Project Repo',
      type: 'string',
      description:
        'This is a link to the project repo, if not created yet, put  "NA"',
    },
  ],
  preview: {
    select: {
      subtitle: 'linkToProject',
      title: 'NameOfProject',
    },
  },
};
