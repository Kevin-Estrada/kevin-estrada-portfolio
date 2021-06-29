export default {
	name: 'languageTech',
	title: 'Languages',
	type: 'document',
	fields: [
		{
			name: 'langImage',
			title: 'Language Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'linkToDocs',
			title: 'Link to Documentation, if none put "#',
			type: 'url',
		},
	],
};
