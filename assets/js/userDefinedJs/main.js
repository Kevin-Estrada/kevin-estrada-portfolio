// window.onload = fetchFunction;
// const sanityClient = require('@sanity/client');
// const client = sanityClient({
// 	projectId: 'ijui30ya',
// 	dataset: 'production',
// 	useCdn: true,
// });

// const query =
// 	'*[_type == "languageTech"] {langLinkToDocs, langAltText, langImage{asset->{_id,url}}}';

// var containerLangTechRowVar = document.getElementById('containerLangTechRow');

// async function fetchFunction() {
// 	let response = await client.fetch(query);

// 	for (let x in response) {
// 		var newNode = document.createElement('div');
// 		newNode.className = 'col-md-4 col-lg-2';
// 		newNode.innerHTML = `<div class="technologies__logo-box shadow-sm"><a href="${response[x].langLinkToDocs}" target="_blank"><img src="${response[x].langImage.asset.url}" alt="${response[x].langAltText}" title="${response[x].langAltText}"class="img-fluid"></a></div>`;
// 		console.log(x + ': ' + response[x].langImage.asset.url);
// 		containerLangTechRowVar.appendChild(newNode);
// 	}
// }

// var jsonObject = fetchFunction(query); // Returns Promise
