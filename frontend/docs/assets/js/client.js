// import { createClient } from '/@sanity/client'

// export const client = createClient({
//   projectId: 'ijui30ya',
//   dataset: 'production',
//   useCdn: true,
// })
// // const sanityClient = require('@sanity/client');
// // const client = sanityClient({
// //   projectId: 'ijui30ya',
// //   dataset: 'production',
// //   useCdn: true,
// //   apiVersion: '2023-08-14'
// // });

// export async function getPosts() {
//   const posts = await client.fetch('*[_type == "languageTech" || _type == "framesLibsTech" || _type == "projectsDoc" || _type == "certificatesDoc"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}, frameLibLinkToDocs, frameLibAltText, frameLibImage{asset->{_id,url}}, NameOfProject, projectImg{asset->{_id,url}}, descOfProject, linkToProject, linkToProjectRepo, nameOfCert,issuingOrg,issueDate,certId,certUrl}');
//   return posts;
// }


let PROJECT_ID = "ijui30ya";
let DATASET = "production";
let QUERY = encodeURIComponent('*[_type == "languageTech" || _type == "framesLibsTech" || _type == "projectsDoc" || _type == "certificatesDoc"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}, frameLibLinkToDocs, frameLibAltText, frameLibImage{asset->{_id,url}}, NameOfProject, projectImg{asset->{_id,url}}, descOfProject, linkToProject, linkToProjectRepo, nameOfCert,issuingOrg,issueDate,certId,certUrl}');

// Compose the URL for your project's endpoint and add the query
let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

async function clientSanity() {
  try {
    const result = await fetch(URL);
    const results = await result.json();
    return results;
  } catch (error) {
    console.error("An error occurred:", error);
    return null
  }
}

export { clientSanity }