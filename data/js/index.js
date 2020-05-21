$(document).ready(function(){
    $(".read-btn").click(function(){
        $(this).children().toggleClass("chevron-style");
    });
    $('.selectpicker').selectpicker({title: 'Навыки'});
});