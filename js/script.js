var ref = new Firebase("https://rizer-email.firebaseio.com/contacts"); /*Initialize firebase*/

var userEmail = document.getElementById("emailInput").value; /*Read the email the user typed in*/
var userName = document.getElementById("nameInput").value; /*Read the name the user typed in*/

function submit(userEmail, userName) {
    alert("sending email"); /*Popup window*/
 	ref.push({email: userEmail, id: "userName"}); /*Pushes data to firebase*/
    return false;
}