import { clientSanity } from "./client.js";
// window.onload = fetchFunction;
const response = await clientSanity();
window.onload = assignElements(response);

const form = document.querySelector('.contact-form');
let firstName = document.getElementById('inputFirstName');
let lastName = document.getElementById('inputLastName');
let email = document.getElementById('inputEmail');
let message = document.getElementById('message');
var element = document.getElementById('spinnerIcon');
var para = document.getElementById('formSubText');

//Get the button:
let mybutton = document.getElementById('scrollUpBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById('scrollUpBtn').addEventListener('click', topFunction);
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById('modalBtnOne').addEventListener('click', toggleButton);
document.getElementById('modalBtnTwo').addEventListener('click', toggleButton);
document
  .getElementById('modalBtnThree')
  .addEventListener('click', toggleButton);
document.getElementById('modalBtnFour').addEventListener('click', toggleButton);

document
  .getElementById('closeXModalOne')
  .addEventListener('click', toggleButton);
document
  .getElementById('closeModalOneFooter')
  .addEventListener('click', toggleButton);

document
  .getElementById('closeXModalTwo')
  .addEventListener('click', toggleButton);
document
  .getElementById('closeModalTwoFooter')
  .addEventListener('click', toggleButton);

document
  .getElementById('closeXModalThree')
  .addEventListener('click', toggleButton);
document
  .getElementById('closeModalThreeFooter')
  .addEventListener('click', toggleButton);

document
  .getElementById('closeXModalFour')
  .addEventListener('click', toggleButton);
document
  .getElementById('closeModalFourFooter')
  .addEventListener('click', toggleButton);

function toggleButton(e) {
  let myButton = document.getElementById('scrollUpBtn');
  myButton.classList.toggle('visually-hidden');
}

const query =
  '*[_type == "languageTech" || _type == "framesLibsTech" || _type == "projectsDoc" || _type == "certificatesDoc"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}, frameLibLinkToDocs, frameLibAltText, frameLibImage{asset->{_id,url}}, NameOfProject, projectImg{asset->{_id,url}}, descOfProject, linkToProject, linkToProjectRepo, nameOfCert,issuingOrg,issueDate,certId,certUrl}';

var containerLangTechRowVar = document.getElementById('containerLangTechRow');
var containerLangTechDisplay = document.getElementById('langAndTech');

var containerFrameLibTechRowVar = document.getElementById(
  'containerFrameLibTechRow'
);
var containerFrameLibTechDisplay = document.getElementById('libAndFrameworks');

var containerProjectsDocRowVar = document.getElementById(
  'containerProjectsDocRow'
);

var carouselIdPlaceVar = document.getElementById('carouselIdPlace');

// const url = 'http://localhost:8080/';
const url =
  'https://us-central1-web-portfolio-318903.cloudfunctions.net/sendEmail';

//1.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  element.classList.toggle('visually-hidden');
  main();
});

async function main() {
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
  };

  // let formData = {
  // 	firstName: 'Kevin',
  // 	lastName: 'Estrada',
  // 	email: 'test@email.com',
  // 	message: 'Hello Sir',
  // };

  const otherPram = {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(formData),
  };

  const res = await fetch(url, otherPram);
  const json = await res.text();
  if (json == 'Success') {
    element.classList.toggle('visually-hidden');
    para.innerHTML = 'Your form was successfully submitted! Thank you!';
    $('#formModal').modal('show');
    form.reset();
    console.log(json);
  } else {
    element.classList.toggle('visually-hidden');
    para.innerHTML =
      'Something went wrong, please try again to resubmit your contact form!';
    $('#formModal').modal('show');
    form.reset();
    console.log(json);
  }
}

async function assignElements(fetchresult) {
  try {
    let response = await fetchresult["result"]
    var numCount = 0;
    for (let x in response) {
      // console.log(response[x]);

      if (response[x]["langAltText"] != null) {
        containerLangTechDisplay.style.display = 'none';
        var newNodeOne = document.createElement('div');
        newNodeOne.className = 'col-md-4 col-lg-2';
        newNodeOne.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].langLinkToDocs}" target="_blank"><img src="${response[x].langImage.asset.url}" alt="${response[x].langAltText}" title="${response[x].langAltText}"class="img-fluid"></a></div>`;
        containerLangTechRowVar.appendChild(newNodeOne);
      } else if (response[x]["frameLibAltText"] != null) {
        containerFrameLibTechDisplay.style.display = 'none';
        var newNodeTwo = document.createElement('div');
        newNodeTwo.className = 'col-md-4 col-lg-2';
        newNodeTwo.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].frameLibLinkToDocs}" target="_blank"><img src="${response[x].frameLibImage.asset.url}" alt="${response[x].frameLibAltText}" title="${response[x].frameLibAltText}"class="img-fluid"></a></div>`;
        containerFrameLibTechRowVar.appendChild(newNodeTwo);
      } else if (response[x]["NameOfProject"] != null) {
        var newNodeThree = document.createElement('div');
        newNodeThree.className = 'col-lg-4 col-md-6';
        if (response[x]["linkToProject"] == 'NA') {
          newNodeThree.innerHTML = `<div class="card shadow mb-3"><img src="images/comingSoon.jpg" style="height:300px;" class="card-img-top project-image" alt="Project Coming Soon"/><div class="card-body"><h5 class="card-title text-decoration-underline">${response[x].NameOfProject}</h5><p class="card-text">${response[x].descOfProject}</p><div class="project-links"><a href="pages/project-not-found.html" target="_blank" class="btn btn-primary text-white" style="margin-right: 1rem;">Project Link</a><a href="${response[x].linkToProjectRepo}" target="_blank" class="btn btn-secondary text-white">Repo Link</a></div></div></div>`;
        } else {
          newNodeThree.innerHTML = `<div class="card shadow mb-3"><img src="${response[x].projectImg.asset.url}" class="card-img-top project-image" alt="Project Image here"/><div class="card-body"><h5 class="card-title text-decoration-underline">${response[x].NameOfProject}</h5><p class="card-text">${response[x].descOfProject}</p><div class="project-links"><a href="${response[x].linkToProject}" target="_blank" class="btn btn-primary text-white" style="margin-right: 1rem;">Project Link</a><a href="${response[x].linkToProjectRepo}" target="_blank" class="btn btn-secondary text-white">Repo Link</a></div></div></div>`;
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
    }

    // console.log(x + ': ' + response[x].projectImg.asset.url);
    // console.log(JSON.stringify(response[x].langImage.asset.url, null, 4));
    // console.log(x + ': ' + response[x].frameLibImage);
  } catch (error) {
    console.error("An error occurred: ", error);
  }
}

// main();
