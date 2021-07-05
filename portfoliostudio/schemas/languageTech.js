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
			title: 'Alternate Image Text',
			name: 'langAltText',
			type: 'string',
			description: 'This is the field to put image alt text, otherwise blank',
		},
		{
			name: 'langLinkToDocs',
			title: 'Link to Documentation, if none put "#',
			type: 'url',
			description:
				'This is the field to put link to documentation, if none put "#',
		},
	],
	preview: {
		select: {
			subtitle: 'langLinkToDocs',
			title: 'langAltText',
			media: 'langImage',
		},
	},
};
