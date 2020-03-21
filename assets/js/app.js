// Yank theme color from localStorage and use it.
document.documentElement.style.setProperty("--color-brand", localStorage.getItem("userThemeColor"));
document.documentElement.style.setProperty("--color-brand-opacity", localStorage.getItem("userThemeColor"));

const colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  // Theme the site!
  document.documentElement.style.setProperty("--color-brand", this.value);
  document.documentElement.style.setProperty("--color-brand-opacity", this.value);
  // Save the value for next time page is visited.
  localStorage.setItem("userThemeColor", this.value);
});

const yourNameOutputTag = document.querySelector("textarea.your-name")
const locationTag = document.querySelector("textarea.location")
const originalText = yourNameOutputTag.value

//contact
const contactTag = document.querySelector("textarea.contact")

// changing the name
document.querySelector("[name=your-name]").addEventListener("keyup", function (event) {
  if (this.value) {
    yourNameOutputTag.value = this.value
  } else {
    yourNameOutputTag.value = originalText
  }
})

yourNameOutputTag.addEventListener("keyup", function () {
  document.querySelector("[name=your-name]").value = this.value
})

// changing the location
document.querySelector("[name=name]").addEventListener("keyup", function (event) {
  if (this.value) {
    locationTag.value = this.value
  } else {
    locationTag.value = originalText
  }
})

locationTag.addEventListener("keyup", function () {
  document.querySelector("[name=name]").value = this.value
})

// changing the contact address
document.querySelector("[name=contact]").addEventListener("keyup", function (event) {
  if (this.value) {
    contactTag.value = this.value
  } else {
    contactTag.value = originalText
  }
})

contactTag.addEventListener("keyup", function () {
  document.querySelector("[name=contact]").value = this.value
})

// Grab selects
const helpTypeTag = document.querySelector(`select[name="help-type"]`);

const serviceTag = document.querySelector(`select[name="service"]`);
const timeTag = document.querySelector(`select[name="time"]`);
const contactMethodTag = document.querySelector(`select[name="contact-method"]`);

// listen for changes
helpTypeTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("offer").innerHTML = this.value;
});

// listen for changes
serviceTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("service").innerHTML = this.value;
});

// listen for changes
timeTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("time").innerHTML = this.value;
});

// listen for changes
contactMethodTag.addEventListener("change", function() {
  // update the dang HTML
   document.getElementById("contact-method").innerHTML = this.value;
});

// auto expand text areas as people type
// ...thanks for the code Chris Ferdinandi! (https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/)
var autoExpand = function (field) {

	// Reset field height
	field.style.height = '64px';

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