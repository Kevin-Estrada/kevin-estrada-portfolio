const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: 'ijui30ya',
  dataset: 'production',
  useCdn: true,
});

module.exports = client;
