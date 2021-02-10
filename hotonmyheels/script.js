function _(id) {return document.getElementById(id); }
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
	document.logo.src = './images/company_logo.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Hot On My Heels';
	document.querySelector('#company-desc').innerHTML = `
	"Welcome to Hot on my heels an online store bringing you All unique details in your closet; Apparel and accessories to make you Stan!

	Are you a lover of beautiful details in your wardrobe? Here to serve you All day, Everyday with our fast delivery service.
	
	"`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Hot on my heels is a fashion store, that is unique, natural, and gentle. We are designed to meet the needs of people who are obsessed with nice looks with an aim of providing 
	satisfaction to anyone who comes across our store.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `To be Africa's most favorite online Fashion store.`;

	// middle section in about us
	document.aboutimg.src = './images/slide1.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Choose happiness, choose clothes!`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To complete that look you've been rooting for, We want to inspire women to feel their very best selves! `;

	// In team section
	

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali, Rwanda';
	document.querySelector('#street').innerHTML = 'KG 546ST';
	document.querySelector('#email').innerHTML = 'akanakintamaange@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788511024';

	// Link to social media
	document.querySelector('#instagram').href = 'https://www.instagram.com/hot_onmyheels/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788511024';
	document.querySelector('#linkedin').href = 'https://www.linkedin.com/in/ange-akanakintama/';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/slide3.jpg',
	'./images/s4.jpg',
	'./images/slide2.jpg',
	'./images/view.jpg',
	'./images/slide4.jpg',
	
];

const serviceImages = [
	{
		image: './images/view.jpg',
		title: 'Title 1',
		text: 'Outside view',
	},
	{ image: './images/s1.jpg', title: 'Title 2', text: 'Swimming pool' },
	{ image: './images/s4.jpg', title: 'Title 3', text: 'For lunch' },
	{ image: './images/s2.jpg', title: 'Title 3', text: 'For lunch' },
	{ image: './images/s3.jpg', title: 'Title 3', text: 'For lunch' },
];

function changeImages() {
	document.slide.src = images[i];
	document.imgservice.src = serviceImages[j].image;
	document.querySelector('#title-service').innerHTML = serviceImages[j].title;
	document.querySelector('#text-service').innerHTML = serviceImages[j].text;

	if (i < images.length - 1) {
		i++;
	} else if (j < serviceImages.length - 1) {
		j++;
	} else {
		i = 0;
		j = 0;
	}
	setTimeout('changeImages()', 3000);
}
window.onload = changeImages;

function submitForm() {
	var status = _("response_status");
	status.innerHTML = "Please wait ...";
	var formdata = new FormData();
	formdata.append("email", _("email_from").value );
	formdata.append("message", _("contact_message").value );
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "send_email.php");
	ajax.onreadystatechange = function () {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success") {
				_("email_from").value = "";
				_("contact_message").value = "";
				_("response_status").innerHTML = 'Thank you! your message is sent';
				setTimeout(function(){ _("response_status").innerHTML = ""; }, 3000);
			} else {
				_("response_status").innerHTML = ajax.responseText;
				_("my_btn").disabled = false;
				setTimeout(function(){ _("response_status").innerHTML = ""; }, 3000);
			}
		}
	}
	ajax.send(formdata);
}
