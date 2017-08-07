$(document).ready(function () {
    $('#submit').click(function (event) {
         // event.preventDefault();
    });

    $("#contact-form").validate({
        rules: {
            name: "required",
            lastname: "required",
            cemail: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Wprowadź swoje imię  ",
            cemail: {
                required: "Wprowadź swoje imię",
                email: "Wprowadź poprawny adres e-mail"
            },
            lastname: {
                required: "Wprowadź nazwisko",
                date: "Please enter a valid date"
            },
            movie: {
                required: "Please choose a movie",
                adultsOnly: "This movie is for adults only!"
            }
        },
    });
});





