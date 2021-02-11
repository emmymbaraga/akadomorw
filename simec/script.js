function _(id) {
  return document.getElementById(id);
}
// Include a file
function includeHTML() {
  let z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }

  /**
   * Here you will be setting information according to the company
   */

  // In NavBar section add logo image
  document.logo.src = "./images/logo.png";

  // In menu section, the first section below navbar
  document.querySelector("#company-title").innerHTML = "SIMEC";
  document.querySelector(
    "#company-desc"
  ).innerHTML = `Sustainable Irrigation Management Engineers Cooperation.`;

  // In who we are section
  document.querySelector(
    "#status"
  ).innerHTML = `SIMEC is Youth-led Non Government organization in Rwanda registered under No 679/RGB/NGO/OC/02/2020 aims to modernize agriculture through irrigation, environmental conservation and disaster risk reduction in Rwanda.
	The organization believes that environmental conservation and disaster risk reduction.
	organization is a grassroot-level solution for Rwanda’s Irrigation, environmental and disaster problems. And since all issues are
	multibranched in nature, the scope of organization covers all environmental-related problems.`;

  // Abous us section
  // left section in about us
  document.querySelector(
    "#mission"
  ).innerHTML = `Our mission is to modernize agriculture through irrigation, environmental conservation and disaster risk reduction in Rwanda.`;

  // middle section in about us
  document.aboutimg.src = "./images/logo.png";
  document.querySelector("#img-caption");

  // right section in about us
  document.querySelector(
    "#visions"
  ).innerHTML = `Our vision is to fight against scarcity of water, land, food,  and environment by adopting latest irrigation, environmental and disaster management Solutions`;

  // In team section
 

  // In contact us section
  document.querySelector("#address").innerHTML = "Nyagatare District";
  document.querySelector("#street").innerHTML = "KN857";
  document.querySelector("#email").innerHTML = "simecrwanda@gmail.com";
  document.querySelector("#phone").innerHTML = "+250788720439 / +250788880818";

  // Link to social media
  document.querySelector("#facebook").href =
    "http://www.facebook.com/SimecRwanda";
  document.querySelector("#twitter").href = "https://twitter.com/SimecRwanda";
  document.querySelector("#instagram").href =
    "http://www.instagram.com/SimecRwanda/";
  document.querySelector("#whatsapp").href = "https://wa.me/+250788880818";
  // document.querySelector("#youtube").href = "http://www.youtube.com";
  document.querySelector("#linkedin").href =
    "https://www.linkedin.com/in/simec-rwanda-318a87205/";
}

// images sliding
let i = 0;
let j = 0;

const images = [
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
  "./images/img7.jpg",
];

const serviceImages = [
  {
    image: "./images/img4.jpg",
    title: "",
    text: `Repairing and maintenances of irrigation equipment , materials  that given through Small Scale Irrigation Program(SSIT) , subsidesand large scale irrigation system equipment.`,
  },
  {
    image: "./images/img5.jpg",
    title: "",
    text: `Research on agriculture through irrigation, environmental`,
  },
  {
    image: "./images/img6.jpg",
    title: "",
    text: `Irrigation project management`,
  },
  {
    image: "./images/img7.jpg",
    title: "",
    text: `Conservation and disaster risk reduction.`,
  },
  {
    image: "./images/img4.jpg",
    title: "",
    text: `Mobilize the benefits of modern agriculture , Irrigation, fertilizers application, rain water harvesting, disaster management and environmental conservation.`,
  },
  {
    image: "./images/img2.jpg",
    title: "",
    text:
      "Tree plantation around river banks and waste canals, terrace construction.",
  },
  {
    image: "./images/img3.jpg",
    title: "",
    text: `Rain water harvesting from mountain, house roof, plant, and irrigate edible trees`,
  },
  {
    image: "./images/img3.jpg",
    title: "",
    text: `Emphasize re-use of purified domestic water in irrigating kitchen garden and home activities like washing clothes, mopping and others.`,
  },
  {
    image: "./images/img3.jpg",
    title: "",
    text: `To assist farmers to increase agricultural production on small plots of land through irrigation and link farmers with markets.`,
  },
  {
    image: "./images/img3.jpg",
    title: "",
    text: `Train farmers/community about  irrigation, environmental`,
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