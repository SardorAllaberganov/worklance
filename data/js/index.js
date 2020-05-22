$(document).ready(function () {
    $(".read-btn").click(function () {
        $(this).children().toggleClass("chevron-style");
    });
    $('.selectpicker').selectpicker({ title: 'Навыки' });

    $(".show-password").click(function () {
        var input = $(this).siblings();
        if (input.attr("type") == 'password') {
            input.attr("type", "text");
            $(this).children().attr("src", "data/img/eye-slash.svg");
        }
        else {
            input.attr("type", "password");
            $(this).children().attr("src", "data/img/eye.svg");
        }
    });
});


