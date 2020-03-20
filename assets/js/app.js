// Yank theme color from localStorage and use it.
document.documentElement.style.setProperty("--color-brand", localStorage.getItem("userThemeColor"));

const colorInput = document.querySelector("#choose-theme-color");

colorInput.addEventListener("change", function() {
  // Theme the site!
  document.documentElement.style.setProperty("--color-brand", this.value);
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
