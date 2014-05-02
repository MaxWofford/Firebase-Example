var ref = new Firebase("https://rizer-email.firebaseio.com/contacts"); /*Initialize firebase*/

var userEmail = document.getElementById("email-input").value; /*Read the email the user typed in*/
var userName = document.getElementById("name-input").value; /*Read the name the user typed in*/

var clickSubmit = document.getElementById("submitButton"); /*Read when the user presses submit*/

function submit(userName, userEmail) {
    alert("sending email"); /*Popup window*/
 	ref.push({id: userName, email: userEmail}); /*Pushes data to firebase*/
    return false;
}