import client from './client.js';
import fetchFunction from './main.js';
window.onload = fetchFunction;

const query =
  '*[_type == "languageTech" || _type == "framesLibsTech" || _type == "projectsDoc" || _type == "certificatesDoc"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}, frameLibLinkToDocs, frameLibAltText, frameLibImage{asset->{_id,url}}, NameOfProject, descOfProject, linkToProject, linkToProjectRepo, nameOfCert,issuingOrg,issueDate,certId,certUrl}';

var containerLangTechRowVar = document.getElementById('containerLangTechRow');

var containerFrameLibTechRowVar = document.getElementById(
  'containerFrameLibTechRow'
);
var containerProjectsDocRowVar = document.getElementById(
  'containerProjectsDocRow'
);

var carouselIdPlaceVar = document.getElementById('carouselIdPlace');
