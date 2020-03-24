// Yank theme color from localStorage and use it.
document.documentElement.style.setProperty("--color-brand", localStorage.getItem("userThemeColor"));

const colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  // Theme the site!
  document.documentElement.style.setProperty("--color-brand", this.value);
  // Save the value for next time page is visited.
  localStorage.setItem("userThemeColor", this.value);
});

const yourNameOutputTag = document.querySelector("textarea.your-name");

const originalText = yourNameOutputTag.value;

//contact
const contactTag = document.querySelector("textarea.contact");

// changing the name
document.querySelector("[name=name]").addEventListener("keyup", function (event) {
  if (this.value) {
    yourNameOutputTag.value = this.value;
  } else {
    yourNameOutputTag.value = originalText;
  };
});

yourNameOutputTag.addEventListener("keyup", function () {
  document.querySelector("[name=name]").value = this.value;
});

// changing the contact address
document.querySelector("[name=contact]").addEventListener("keyup", function (event) {
  if (this.value) {
    contactTag.value = this.value;
  } else {
    contactTag.value = originalText;
  };
});

contactTag.addEventListener("keyup", function () {
  document.querySelector("[name=contact]").value = this.value;
});

// Grab selects
const prefixTag = document.getElementById("prefix");
const userTag = document.querySelector(`select[name="user"]`);
const activityTag = document.querySelector(`select[name="activity"]`);
const thingTag = document.querySelector(`select[name="thing"]`);
const socialChannelTag = document.querySelector(`select[name="social-channel"]`);
const locationTag = document.querySelector(`select[name="location"]`);
const dayTag = document.querySelector(`select[name="day"]`);
const timeTag = document.querySelector(`select[name="time"]`);
const timeEndTag = document.querySelector(`select[name="time-end"]`);
const timeZoneTag = document.querySelector(`select[name="timezone"]`);

const contactMethodTag = document.querySelector(`select[name="contact-method"]`);






userTag.addEventListener("change", function() {
  document.getElementById("user").innerHTML = this.value;
  if (prefixTag.innerHTML =="My name is") {
    prefixTag.innerHTML ="Our name is";
    console.log(prefixTag);
  } else if (prefixTag.innerHTML =="Our name is") {
    prefixTag.innerHTML = "My name is";
    }
});

//
// userTag.addEventListener("change", function() {
//   if (prefixTag.innerHTML == "My name is") {
//     prefixTag.innerHTML = "Our name is";
//   }
//   if (prefixTag.innerHTML == "Our name is") {
//     prefixTag.innerHTML = "My name is";
//   }
//   console.log(prefixTag);
// });


// userTag.addEventListener("change", function() {
//   // const prefixTag = document.querySelector(`h2[id="prefix"]`);
//   // update the dang HTML
//   if document.querySelector(`h2[id="prefix"]`).innerHTML == "My name is") {
//     document.getElementById("preifx").innerHTML = "My name is";
//   } else if document.querySelector(`h2[id="prefix"]`).innerHTML == "Our name is" {
//     document.getElementById("prefix").innerHTML = "My name is";
//   }
// });


// listen for changes
activityTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("activity").innerHTML = this.value;
});

// listen for changes
thingTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("thing").innerHTML = this.value;
});

// listen for changes
socialChannelTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("social-channel").innerHTML = this.value;
});

// listen for changes
locationTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("location").innerHTML = this.value;
});

// listen for changes
dayTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("day").innerHTML = this.value;
});

// listen for changes
timeTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("time").innerHTML = this.value;
});

// listen for changes
timeEndTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("time-end").innerHTML = this.value;
});

// auto expand text areas as people type
// ...thanks for the code Chris Ferdinandi! (https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/)
var autoExpand = function (field) {

	// Reset field height
	field.style.height = '56px';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
	if (event.target.id.toLowerCase() !== 'your-name') return;
	autoExpand(event.target);
}, false);

// grab generate button and add click event

function getCssRules(styleSheets) {
    var cssRules = [];
    var anchor = document.createElement('a');
    styleSheets.forEach(function (sheet) {
        anchor.href = sheet.href;
        if (anchor.hostname === window.location.hostname) {
            util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
        }
    });
    return cssRules;
}

document.getElementById('generate-sticker').addEventListener('click', function() {

  var node = document.getElementById('sticker-node');

  var scale = 3;
  domtoimage.toPng((node), { bgcolor: '#f7f7f7', quality: 1, width: node.clientWidth * scale,  height: node.clientHeight * scale,  style: {   transform: 'scale('+scale+')',   transformOrigin: 'top left' } })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-sticker.png';
        link.href = dataUrl;
        link.click();
    });
});
