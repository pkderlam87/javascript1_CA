const button = document.querySelector("button");
const form = document.querySelector("form");
const myname = document.querySelector("#myname");
const nameError = document.querySelector("#mynameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");

function validateForm() {
    event.preventDefault();
    if (checkLength(myname.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
};
button.addEventListener("click", validateForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function sendForm(event) {
    event.preventDefault();
    if ((checkLength(myname.value, 1) && (checkLength(subject.value, 10) && (checkLength(address.value, 25) && (validateEmail(email.value)))))) {
        message.innerHTML = createMessage("success", "Your message has been sent");
        form.reset();
    }
}
button.addEventListener("click", sendForm);