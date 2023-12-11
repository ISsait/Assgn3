// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById('submit-button').addEventListener('click', submit);

function submit() {
    var message = document.getElementById('contact-page');
    document.getElementById('contact-page').style.fontSize = "24px"
    document.getElementById('contact-page').style.textAlign = "center"
    message.innerHTML = "Thank you for your message!"
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

