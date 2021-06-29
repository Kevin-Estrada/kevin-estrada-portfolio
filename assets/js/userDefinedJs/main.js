window.onload = fetchFunction;
const sanityClient = require('@sanity/client');
const client = sanityClient({
	projectId: 'ijui30ya',
	dataset: 'production',
	useCdn: true,
});

const query =
	'*[_type == "languageTech"] {linkToDocs, langImage{asset->{_id,url},alt}}';

var containerLangTechRowVar = document.getElementById('containerLangTechRow');

async function fetchFunction() {
	let response = await client.fetch(query);

	for (let x in response) {
		var newNode = document.createElement('div');
		newNode.className = 'col-md-4 col-lg-2';
		newNode.innerHTML = `<div class="technologies__logo-box shadow-sm"><img src="${response[x].langImage.asset.url}" alt="${response[x].langImage.asset._id}" title="${response[x].langImage.asset._id}"class="img-fluid"></div>`;
		console.log(x + ': ' + response[x].langImage.asset.url);
		containerLangTechRowVar.appendChild(newNode);
	}
}

// var jsonObject = fetchFunction(query); // Returns Promise
