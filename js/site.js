function formcheck() {
	var email = document.forms["registerForm"]["email"].value
	var number = document.forms["registerForm"]["number"].value
	var message = document.forms["registerForm"]["message"].value
	if((!email) || (!number) || (!message)) {
		alert("Please complete all the necessary fields");
		return false;
	}
	else {
		alert("You have successfully registered for our newsletter")
	}
}