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
			title: 'Alternate Image Text',
			name: 'frameLibAltText',
			type: 'string',
			description: 'This is the field to put image alt text, otherwise blank',
		},
		{
			name: 'frameLibLinkToDocs',
			title: 'Link to Documentation, if none put "#',
			type: 'url',
			description:
				'This is the field to put link to documentation, if none put "#',
		},
	],
	preview: {
		select: {
			subtitle: 'frameLibLinkToDocs',
			title: 'frameLibAltText',
			media: 'frameLibImage',
		},
	},
};
