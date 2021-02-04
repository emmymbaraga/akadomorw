function _(id) {
	return document.getElementById(id);
}
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/logo.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'ORIBI CRAFTS LTD';
	document.querySelector('#company-desc').innerHTML = ``;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Our company is called ORIBI Crafts LTD,we started working in 2019,
	we are currently located in kimironko on KG199st,we make all leather products`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Manufacture of leather goods all from products made in Rwanda, 
	and the use of Rwandans in all operation`;

	// middle section in about us
	document.aboutimg.src = './images/sandal_about.jpg';
	document.querySelector('#img-caption').innerHTML = ``;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `1. To help the people of Rwanda no longer buy leather goods from abroad. <br>
								2. Assist in changing people's perceptions on products made in Rwanda. <br>
								3. Employment for a large number of Rwandan youth`;

	// In team section
	document.firstimg.src = './images/senga.jpg';
	document.querySelector('#first-name').innerHTML = 'NZAYISENGA Olivier';
	document.querySelector('#first-position').innerHTML = 'Chef Executif Officer';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Gasabo, Kimironko, Nyagatovu';
	document.querySelector('#street').innerHTML = 'KG199ST';
	document.querySelector('#email').innerHTML = 'sengaolivier7@gmail.com';
	document.querySelector('#phone').innerHTML = '+250785909114';

	// Link to social media
	document.querySelector('#facebook').href =
		'http://web.facebook.com/oribicrafts';
	document.querySelector('#twitter').href = 'https://twitter.com/CraftsOribi';
	document.querySelector('#instagram').href =
		'http://www.instagram.com/oribicrafts';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250785909114';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/menu1.jpg',
	'./images/menu2.jpg',
	'./images/belt.jpg',
	'./images/pochette.jpg',
	'./images/small_pochette.jpg',
	'./images/belt1.jpg',
	'./images/belt2.jpg',
];

const serviceImages = [
	{
		image: './images/sandal.jpg',
		title: 'Sandal',
		text: 'Price: rwf12000',
	},
	{
		image: './images/big_wallet.jpg',
		title: 'Big Wallet',
		text: 'Price: rwf8000',
	},
	{
		image: './images/small_wallet.jpg',
		title: 'Small Wallet',
		text: 'Price: rwf6000',
	},
	{
		image: './images/cardholder.jpg',
		title: 'Card Holder',
		text: 'Price: rwf3000',
	},
	{
		image: './images/belt_with_design.jpg',
		title: 'Belt with design',
		text: 'Price: rwf8000',
	},
	{
		image: './images/belt_without_design.jpg',
		title: 'Belt without design',
		text: 'Price: rwf6000',
	},
	{
		image: './images/cable_organiser1.jpg',
		title: 'Cable organiser',
		text: 'Price: rwf5000',
	},
	{
		image: './images/cable_organiser2.jpg',
		title: 'Cable organiser',
		text: 'Price: rwf5000',
	},
];

function changeImages() {
	function _(id) {
		return document.getElementById(id);
	}

	if (_('slider_image') !== null) {
		_('slider_image').setAttribute('src', images[i]);
		_('imgservice').setAttribute('src', serviceImages[j].image);

		document.querySelector('#title-service').innerHTML = serviceImages[j].title;
		document.querySelector('#text-service').innerHTML = serviceImages[j].text;

		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		if (j < serviceImages.length - 1) {
			j++;
		} else {
			j = 0;
		}
	}
	setTimeout('changeImages()', 3000);
}

function click_hamburger() {
	function _(id) {
		return document.getElementById(id);
	}
	_('hamburger_btn').click();
}

function submitForm() {
	var status = _('response_status');
	status.innerHTML = 'Please wait ...';
	var formdata = new FormData();
	formdata.append('email', _('email_from').value);
	formdata.append('message', _('contact_message').value);
	var ajax = new XMLHttpRequest();
	ajax.open('POST', 'send_email.php');
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText == 'success') {
				_('email_from').value = '';
				_('contact_message').value = '';
				_('response_status').innerHTML = 'Thank you! your message is sent';
				setTimeout(function () {
					_('response_status').innerHTML = '';
				}, 3000);
			} else {
				_('response_status').innerHTML = ajax.responseText;
				_('my_btn').disabled = false;
				setTimeout(function () {
					_('response_status').innerHTML = '';
				}, 3000);
			}
		}
	};
	ajax.send(formdata);
}
