export default {
	name: 'framesLibsTech',
	title: 'Frameworks & Libraries',
	type: 'document',
	fields: [
		{
			name: 'frameLibImage',
			title: 'Framework or Library Image',
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
