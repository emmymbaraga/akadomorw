function _(id) {return document.getElementById(id); }

// Include a fil
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
	//document.logo.src = './images/white_transparent.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Neza Entertainment';
	document.querySelector('#company-desc').innerHTML = `
	We are a versatile and diverse Entertainment Hub with all services regarding provision of happiness.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Neza Entertainment is an entertainment Hub based in Kigali in Rwanda that is evaluated on fundamentals of Smartness, Discipline, and Respect for our clients and partners
	 .`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Creating Jobs for youths  `;

	// middle section in about us
	document.aboutimg.src = './images/slider1.jpeg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Our customers' happiness is what we priorities`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Youth Empowerment `;

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali, Rwanda';
	document.querySelector('#street').innerHTML = 'KG133';
	document.querySelector('#email').innerHTML = 'niwemike@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788782442';

	// Link to social media
	document.querySelector('#facebook').href = 'https://www.facebook.com/uwajeneza';
	document.querySelector('#twitter').href = 'https://twitter.com/Nezamichel';
	document.querySelector('#instagram').href = 'https://www.instagram.com/nezamichel/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788782442';
	document.querySelector('#youtube').href = 'https://www.youtube.com/channel/UCW3TpK1VOW5fUoeWlHSCbHQ';
	document.querySelector('#linkedin').href = 'https://www.linkedin.com/in/michel-uwajeneza-23044213b/';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/view.jpeg',
	'./images/cover.jpeg',
	'./images/slider1.jpeg',
	'./images/slider2.jpeg',
	'./images/slider 3.jpeg',
	
];

const serviceImages = [
	{
		image: './images/cover.jpeg',
		title: 'Events',
		text: 'We provided event organizer, sounds system, Dj, artist and decorations for all your memorable ceremonies.',
	},
	{ image: './images/slider1.jpeg', title: 'House and Land property', text: 'Get available properties for lending or buying. House for individuals, Families or Groups of people.' },
	{ image: './images/slider6.jpeg', title: 'clothings and Fashions', text: 'Our beautiful clothing will complement your beauty. We sell dresses, shirts, jumpsuits, leggings, swimwear, jewelry, shoes and more.' },
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
//
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

