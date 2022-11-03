function checkForm() {
    var spamAmount = document.forms["mailingListForm"]["email_amount"].value
    var email = document.forms["mailingListForm"]["email_data"].value
    if ((!spamAmount) || (!email)) {
        alert("Please complete all the necessary fields!");
        return false;
    }
    else {
        alert("You have successfully registered for our mailing list!")
    }
}