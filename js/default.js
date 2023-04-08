(() => {

/* --- Mobile Menu --- */

const button = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav-header');
const logo = document.querySelector('.header-logo');

function resizeUpdate() {
	const expanded = nav.getAttribute('aria-expanded');
	if (expanded && document.body.offsetWidth >= 768) {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
		logo.classList.remove('header-logo-mobile');
	}
}

function toggleMenu() {
	if (nav.getAttribute('aria-expanded') === 'false') {
		nav.setAttribute('aria-expanded', true);
		nav.classList.add('nav-header-show');
		button.classList.add('nav-header-button-close');
		logo.classList.add('header-logo-mobile');
		document.body.style.overflow = 'hidden';
	} else {
		nav.setAttribute('aria-expanded', false);
		nav.classList.remove('nav-header-show');
		button.classList.remove('nav-header-button-close');
		logo.classList.remove('header-logo-mobile');
		document.body.style.overflow = 'auto';
	}
}

window.addEventListener('resize', resizeUpdate);
button.addEventListener('click', toggleMenu);

/* --- Features --- */

const features = document.querySelectorAll('.feature');

function updateFeatureSelection(e) {
	features.forEach((feature) => {
		if (feature.id === e.currentTarget.value) {
			feature.classList.remove('feature-hidden');
		} else {
			feature.classList.add('feature-hidden');
		}
	});
}

const featureRadios = document.querySelectorAll('input[name="features"]');
featureRadios.forEach((featureRadio) => {
	featureRadio.addEventListener('click', updateFeatureSelection);
});

/* --- Subscriber --- */

const subscriberSubmit = document.querySelector('#button-subscribe');

function checkSubscriberEmail(e) {
	e.preventDefault();

	const subscriberEmail = document.querySelector('#subscribe-email');
	const subscriberError = document.querySelector('#subscribe-email-error');

	if (subscriberEmail.validity.valid) {
		subscriberEmail.classList.remove('subscribe-email-error');
		subscriberError.style.display = 'none';
	} else {
		subscriberEmail.classList.add('subscribe-email-error');
		subscriberError.style.display = 'block';
	}
}

subscriberSubmit.addEventListener('click', checkSubscriberEmail);

})();