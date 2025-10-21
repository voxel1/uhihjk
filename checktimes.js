var audio = new Audio('get.mp3');
var theimage = document.getElementById("cool");
var yay = localStorage.getItem("game");

$(function(){ ///did u do it?
    var game = parseInt(localStorage.getItem('game'), 10),
        loaded_numb = game?game+1:1;
        console.log(loaded_numb);
    localStorage.setItem('game', loaded_numb);
});

if (localStorage.getItem('game') == 19)
{
    theimage.style.display = "block";
    audio.play();

    setTimeout(
        function() {
            theimage.style.display = "none";
            }, 10000);
}