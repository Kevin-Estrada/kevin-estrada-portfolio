import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle.js';

const navLinksToggle = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinksToggle.forEach((l) => {
	l.addEventListener('click', () => {
		bsCollapse.toggle();
	});
});
