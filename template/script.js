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
	document.logo.src = './images/white_transparent.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Company Name';
	document.querySelector('#company-desc').innerHTML = `
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
					enim quis neque nulla mollitia corporis soluta, fugiat perferendis
					corrupti deleniti impedit magni molestiae delectus autem voluptatem
					ducimus asperiores voluptatibus.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque optio
					enim quis neque nulla mollitia corporis soluta, fugiat perferendis
					corrupti deleniti impedit magni molestiae delectus autem voluptatem
					ducimus asperiores voluptatibus.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// middle section in about us
	document.aboutimg.src = './images/cover.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Granit Frank';
	document.querySelector('#first-position').innerHTML = 'Co founder & CEO';

	document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'William Haven';
	document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
	document.querySelector('#third-position').innerHTML = 'Business Analyst';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
	document.querySelector('#fouth-position').innerHTML = 'Sales Manager';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali';
	document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'info@template.com';
	document.querySelector('#phone').innerHTML = '+250788374674';

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com';
	document.querySelector('#twitter').href = 'http://www.twitter.com';
	document.querySelector('#instagram').href = 'http://www.instagram.com';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788384757';
	document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/view.jpg',
	'./images/cover.jpg',
	'./images/s1.jpeg',
	'./images/s2.jpeg',
	'./images/s3.jpeg',
	'./images/slide1.jpg',
	'./images/slide2.jpg',
	'./images/slide3.jpg',
	'./images/slide4.jpg',
];

const serviceImages = [
	{
		image: './images/s1.jpeg',
		title: 'Title 1',
		text: 'Outside view',
	},
	{ image: './images/s2.jpeg', title: 'Title 2', text: 'Swimming pool' },
	{ image: './images/s3.jpeg', title: 'Title 3', text: 'For lunch' },
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
