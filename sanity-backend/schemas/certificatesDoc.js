export default {
	name: 'certificatesDoc',
	title: 'My Certificates',
	type: 'document',
	fields: [
		{
			title: 'Name of Certificate',
			name: 'nameOfCert',
			type: 'string',
			description: 'Enter the name of the Certificate',
		},
		{
			title: 'Issuing Organization',
			name: 'issuingOrg',
			type: 'string',
			description: 'Name of issuing organization',
		},
		{
			name: 'issueDate',
			title: 'Date of issue',
			type: 'date',
			description: 'Type date that the certificate was issued',
		},
		{
			title: 'Credential ID',
			name: 'certId',
			type: 'string',
			description: 'Fill in the certificate ID, if none put "NA"',
		},
		{
			name: 'certUrl',
			title: 'Credential URL',
			type: 'string',
			description: 'Fill in the certificate URL, if none put "NA"',
		},
	],
	preview: {
		select: {
			subtitle: 'issuingOrg',
			title: 'nameOfCert',
		},
	},
};
