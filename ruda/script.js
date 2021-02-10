// images sliding
let i = 0;
let j = 0;
const images = [
	'./images/ruda1.jpeg',
	'./images/ruda3.jpeg',
	'./images/ruda4.jpeg',
	'./images/ruda7.jpeg',
	'./images/ruda8.jpeg',
	'./images/ruda9.jpeg',
	'./images/ruda10.jpeg',
];

const serviceImages = [
	{
		image: './images/ruda2.jpeg',
		title: 'FIRED BRICKS(MPUNYU)',
		text: `We are manufacturers of durable and affordable fired clay bricks. This is our da-to-day business. RUDA bricks are manufactured using modern technology where clay is compressed by a machine. The resulting brick is well shaped with sharp edges. The bricks are then burnt in a kiln at over 1000 Degrees Celsius for hardening purposes. Our bricks have a very high tensile strength, sharp edges. RUDA bricks require no plastering at all.
`,
	},
	{
		image: './images/ruda5.jpeg',
		title: 'SMALL AND MEDIUM RESIDENTIAL CONSTRUCTION (CADASTIRE)',
		text: `RUDA constructs small and medium residential houses for sale. We also contract with individuals and companies to build residential houses for them.
`,
	},
	{
		image: './images/ruda6.jpeg',
		title: 'LAND BROKERAGE',
		text: `RUDA connects the buyers and sellers of land in Kigali. We’ve served a number of foreign investors in spotting and buying strategic land for investment in Kigali. We help them in paper acquisitions from the land center.  We’ve as well served individual customers and companies in buying and selling land in Kigali.`,
	},
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