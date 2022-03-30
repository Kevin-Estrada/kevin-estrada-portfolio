const client = require('./client');
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

async function fetchFunction() {
  let response = await client.fetch(query);
  var numCount = 0;
  for (let x in response) {
    // console.log(x);
    // console.log(Object.keys(response[x])[0]);

    if (Object.keys(response[x])[0] == 'langAltText') {
      var newNodeOne = document.createElement('div');
      newNodeOne.className = 'col-md-4 col-lg-2';
      newNodeOne.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].langLinkToDocs}" target="_blank"><img src="${response[x].langImage.asset.url}" alt="${response[x].langAltText}" title="${response[x].langAltText}"class="img-fluid"></a></div>`;
      containerLangTechRowVar.appendChild(newNodeOne);
    } else if (Object.keys(response[x])[0] == 'frameLibAltText') {
      var newNodeTwo = document.createElement('div');
      newNodeTwo.className = 'col-md-4 col-lg-2';
      newNodeTwo.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].frameLibLinkToDocs}" target="_blank"><img src="${response[x].frameLibImage.asset.url}" alt="${response[x].frameLibAltText}" title="${response[x].frameLibAltText}"class="img-fluid"></a></div>`;
      containerFrameLibTechRowVar.appendChild(newNodeTwo);
    } else if (Object.keys(response[x])[0] == 'NameOfProject') {
      var newNodeThree = document.createElement('div');
      newNodeThree.className = 'col-lg-4 col-md-6';
      if (response[x].linkToProject == 'NA') {
        newNodeThree.innerHTML = `<div class="card shadow"><div class="card-body"><h5 class="card-title text-decoration-underline">${response[x].NameOfProject}</h5><p class="card-text">${response[x].descOfProject}</p><a href="/docs/pages/project-not-found.html" class="btn btn-primary text-white" style="margin-right: 1rem;">Project Link</a><a href="${response[x].linkToProjectRepo}" target="_blank" class="btn btn-secondary text-white">Repo Link</a></div></div>`;
      } else {
        newNodeThree.innerHTML = `<div class="card shadow"><div class="card-body"><h5 class="card-title text-decoration-underline">${response[x].NameOfProject}</h5><p class="card-text">${response[x].descOfProject}</p><a href="${response[x].linkToProject}" target="_blank" class="btn btn-primary text-white" style="margin-right: 1rem;">Project Link</a><a href="${response[x].linkToProjectRepo}" target="_blank" class="btn btn-secondary text-white">Repo Link</a></div></div>`;
      }
      containerProjectsDocRowVar.appendChild(newNodeThree);
    } else {
      var newNodeFour = document.createElement('div');

      if (numCount == 0) {
        newNodeFour.className = 'carousel-item active';
        numCount += 1;
      } else {
        newNodeFour.className = 'carousel-item';
      }
      newNodeFour.innerHTML = `<div class="certificates__card"><h3>${response[x].nameOfCert}</h3><ul class="certificates__desc"><li>Issuing Organization: ${response[x].issuingOrg}</li><li>Date Issued: ${response[x].issueDate}</li><li>Certificate ID: ${response[x].certId}</li><li><a href="${response[x].certUrl}" target="_blank">See Certificate</a></li></ul></div></div>`;
      carouselIdPlaceVar.appendChild(newNodeFour);
    }

    // console.log(x + ': ' + response[x].langImage);
    // console.log(JSON.stringify(response[x].langImage.asset.url, null, 4));
    // console.log(x + ': ' + response[x].frameLibImage);
  }
}
// var jsonObject = fetchFunction(query); // Returns Promise
