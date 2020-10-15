login = () => {

        $(document).ready(function () {
            $.getJSON("../JSON/users.json", (data) => {
                let username = document.getElementById('username').value;
                let password = document.getElementById('password').value;

                $.each(data, (key, value) => {
                    if (value.username == username) {
                        if (value.password == password) {
                            document.getElementById('passworderror').innerHTML = "Successfull";
                            window.location = './dashboard.html'
                        }
                        else {
                            document.getElementById('passworderror').innerHTML = "Invalid Password";
                            return false;
                        }
                    }
                    else {
                        document.getElementById('usererror').innerHTML = "Invalid Username";
                        return false
                    }
                })

            })

        })
    }