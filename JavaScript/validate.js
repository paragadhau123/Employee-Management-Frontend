function validate() {
    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var password = document.getElementById('password').value;

    if (firstname.trim() == "" || lastname == "" || email == "" || phoneNumber == "" || password == "") {
        alert("Fields Can Not Be Empty");
    }
    else {
        var phoneRGEX = /^([0-9]{2}[ ]+)?[0-9]{10}$/;
        var nameRGEX = /^[A-Z]{1}[a-z]{2,}$/;
        var emailRGEX = /^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$/;
        var passwordRGEX = /^([A-Z]{1,})*([(@#$*)-])*[a-zA-Z0-9]{6,}$/;

        var firstNameResult = nameRGEX.test(firstname);
        var lastNameResult = nameRGEX.test(lastname);
        var emailResult = emailRGEX.test(email);
        var phoneNumberResult = phoneRGEX.test(phoneNumber);
        var passwordResult = passwordRGEX.test(password);
        if (firstNameResult == false) {
            document.getElementById('firstnameerror').innerHTML = "Invalid First Name";
        }
        if (lastNameResult == false) {
            document.getElementById('lastnameerror').innerHTML = "Invalid Last Name";
        }
        if (emailResult == false) {
            document.getElementById('emailerror').innerHTML = "Invalid Email";
        }
        if (phoneNumberResult == false) {
            document.getElementById('phonenumerror').innerHTML = "Invalid Phone Number";
        }
        if (passwordResult == false) {
            document.getElementById('passworderror').innerHTML = "Invalid Password";
        }
        return false;
    }
}