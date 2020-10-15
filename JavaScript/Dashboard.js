$(document).ready(function () {

    $.getJSON("../JSON/data.json",
        function (data) {
            var emp = "";

            $.each(data, function (key, value) {


                emp += "<tr>";
                emp += "<td>" +
                    value.FirstName + "</td>";
                emp += '<td>' +
                    value.LastName + '</td>';
                emp += '<td>' +
                    value.EmailId + '</td>';
                emp += '<td>' +
                    value.PhoneNo + '</td>';

                emp += '<td><button>EDIT</button></td>';
                emp += '<td><button>DELETE</button></td>';

                "</tr>";
            });

            $('#table').append(emp);
        });
}); 