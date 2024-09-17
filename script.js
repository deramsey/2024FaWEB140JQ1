$(document).ready(function(){
    $("body").css("background-color", "blue");
    /*changeBG()*/

    $("#example").children('p:first-child').css("font-size", "36px");
    console.log($("#example").children());

    $("#example").hover(
        function() {
            $(this).css({"background-color":"#ffcccc", "color": "red"});
        },
        function() {
            $(this).css({"background-color":"#ff7700", "color": "black"});
        }
    )
});

const changeBG = () => {
    document.querySelector("body").style.backgroundColor = "green";
}