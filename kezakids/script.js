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
	document.logo.src = './images/kids.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Keza Kids';
	document.querySelector('#company-desc').innerHTML = `
					We Sell Children clothes, Shoes of all ages from toddler to 14 years old, both boys and girls.
					We also sell toys, Pampers, dolls,  carpets and many more.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Discover our high quality children's clothes for charming and timeless look, 
					Explore our elegant selection of baby gifts. <br />
					These Clothes are second hand clothes (Caguwa), and brand news designer brands imported from Europe, Canada and USA.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `We're dedicated to giving you the very best of products, with a focus on uniqueness.`;

	// middle section in about us
	document.aboutimg.src = './images/jack_boys.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Welcome to Keza Kids Shop, your number one source for all your children clothes and toys.`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `We want to serve customers all over Kigali City, and are thrilled to be a part of the your children's happiness!`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Uwiringiye Sophie';
	document.querySelector('#first-position').innerHTML = 'Co founder & CEO';

	/* document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'William Haven';
	document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
	document.querySelector('#third-position').innerHTML = 'Business Analyst';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
	document.querySelector('#fouth-position').innerHTML = 'Sales Manager'; */

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali City Tower';
	document.querySelector('#street').innerHTML = 'KN 2 Avenue';
	document.querySelector('#email').innerHTML = 'sobirikunzira@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788374674';

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com';
	document.querySelector('#twitter').href = 'http://www.twitter.com';
	document.querySelector('#instagram').href = 'http://www.instagram.com';
	document.querySelector('#whatsapp').href = 'https://wa.me/';
	document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/cover_page.jpg',
	'./images/toys_2.jpg',
	'./images/jack_boys.jpg',
	/* './images/s2.jpeg',
	'./images/s3.jpeg',
	'./images/slide1.jpg',
	'./images/slide2.jpg',
	'./images/slide3.jpg',
	'./images/slide4.jpg', */
];

const serviceImages = [
	{
		image: './images/sweaters.jpg',
		title: 'Sweaters',
		text: 'Best quality Sweaters',
	},
	{ image: './images/boys_t_shirts.jpg', title: 'T Shirts', text: 'Boys T-Shirts' },
	{ image: './images/girl_dress.jpg', title: 'Dresses', text: 'Girl dresses' },
	{ image: './images/kids_combo.jpg', title: 'Children clothes', text: 'Top and shorts' },
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
