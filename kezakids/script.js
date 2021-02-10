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
	document.querySelector('#first-position').innerHTML = 'Founder & CEO';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali City Tower';
	document.querySelector('#street').innerHTML = 'KN 2 Avenue';
	document.querySelector('#email').innerHTML = 'sobirikunzira@gmail.com';
	// document.querySelector('#phone').innerHTML = '+250788374674';

}

// images sliding
let i = 0;
let j = 0;

const images = [
	// './images/cover_page.jpg',
	'./images/jack_boys.jpg',
	'./images/toys_2.jpg',
];

const serviceImages = [
	{
		image: './images/sweaters.jpg',
		title: 'Sweaters',
		text: 'Best quality Sweaters',
	},
	{ image: './images/boys_t_shirts.jpg', title: 'T Shirts', text: 'Best quality Boys T-Shirts' },
	{ image: './images/girl_dress.jpg', title: 'Dresses', text: 'Best quality Girl dresses' },
	{ image: './images/kids_combo.jpg', title: 'Children clothes', text: 'Best quality top and shorts' },
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