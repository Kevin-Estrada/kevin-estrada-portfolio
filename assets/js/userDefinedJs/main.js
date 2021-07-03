window.onload = fetchFunction;
const sanityClient = require('@sanity/client');
const client = sanityClient({
	projectId: 'ijui30ya',
	dataset: 'production',
	useCdn: true,
});

const query =
	'*[_type == "languageTech" || _type == "framesLibsTech"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}, frameLibLinkToDocs, frameLibAltText, frameLibImage{asset->{_id,url}}}';

var containerLangTechRowVar = document.getElementById('containerLangTechRow');
var containerFrameLibTechRowVar = document.getElementById(
	'containerFrameLibTechRow'
);

async function fetchFunction() {
	let response = await client.fetch(query);

	for (let x in response) {
		// console.log(x);
		// console.log(Object.keys(response[x])[0]);
		if (Object.keys(response[x])[0] == 'langAltText') {
			var newNodeOne = document.createElement('div');
			newNodeOne.className = 'col-md-4 col-lg-2';
			newNodeOne.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].langLinkToDocs}" target="_blank"><img src="${response[x].langImage.asset.url}" alt="${response[x].langAltText}" title="${response[x].langAltText}"class="img-fluid"></a></div>`;
			containerLangTechRowVar.appendChild(newNodeOne);
		} else {
			var newNodeTwo = document.createElement('div');
			newNodeTwo.className = 'col-md-4 col-lg-2';
			newNodeTwo.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].frameLibLinkToDocs}" target="_blank"><img src="${response[x].frameLibImage.asset.url}" alt="${response[x].frameLibAltText}" title="${response[x].frameLibAltText}"class="img-fluid"></a></div>`;
			containerFrameLibTechRowVar.appendChild(newNodeTwo);
		}

		// console.log(x + ': ' + response[x].langImage);
		// console.log(JSON.stringify(response[x].langImage.asset.url, null, 4));
		// console.log(x + ': ' + response[x].frameLibImage);
	}
}

// var jsonObject = fetchFunction(query); // Returns Promise
