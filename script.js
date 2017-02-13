//ensure this script will run AFTER the whole page has loaded
$(document).ready(function() { 
//create a hover event that will set the opacity of the list items to .25 while the mouse is on the box, and back to a 1 opacity when the mouseleaves
$("li").hover(function(){
    $( this ).css("opacity", .25);
}).mouseleave(function(){
    $( this ).css("opacity", 1);
})

//create an onclick event that will set the background-color of the list items to blue and change the text to read "Clicked!", it also will automatically restore the full opacity of the list item selected, in accordance with our previously defined script to have the list item change on "hover".
$("li").click(function(){
    $( this ).css("background-color", "blue");
    $( this ).append('').text("Clicked!");
    $(this).css("opacity", 1);
})



    });


