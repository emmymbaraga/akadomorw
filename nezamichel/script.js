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
	function _(id) {return document.getElementById(id); }
	if(_("slider_image") !== null) {
		_("slider_image").setAttribute('src', images[i]);
		_("imgservice").setAttribute('src', serviceImages[j].image);
	
		document.querySelector('#title-service').innerHTML = serviceImages[j].title;
		document.querySelector('#text-service').innerHTML = serviceImages[j].text;
	
		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		if(j < serviceImages.length - 1) {
			j++
		} else {
			j = 0;
		}
	}

	setTimeout('changeImages()', 5000);
}

function click_hamburger() {
	function _(id) {return document.getElementById(id); }
	_("hamburger_btn").click();
}

function send_email() {
	function _(id) {return document.getElementById(id); }
	const x = _("slider_image");
	console.log('change image function', x);
	var status = _("response_status");
	if(_("email_from").value !== "" && _("email_from").value.includes("@") && _("contact_message").value !== ""){
		status.innerHTML = "Sending message ...";
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
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function(){ status.innerHTML = ""; }, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_("my_btn").disabled = false;
					setTimeout(function(){ status.innerHTML = ""; }, 5000);
				}
			}
		}
		ajax.send(formdata);
	}
}

