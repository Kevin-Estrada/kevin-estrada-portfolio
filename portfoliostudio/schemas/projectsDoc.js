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
			title: 'Description of Project',
			name: 'descOfProject',
			type: 'text',
			description:
				'Type a description of what the project consists of and does.',
		},
		{
			name: 'linkToProject',
			title: 'Link to Working Project',
			type: 'url',
			description:
				'This is a link to the project itself, if not created yet, put "/pages/project-not-found.html"',
		},
		{
			name: 'linkToProjectRepo',
			title: 'Link to Project Repo',
			type: 'url',
			description:
				'This is a link to the project repo, if not created yet, put  "/pages/project-not-found.html"',
		},
	],
	preview: {
		select: {
			subtitle: 'linkToProject',
			title: 'NameOfProject',
		},
	},
};
