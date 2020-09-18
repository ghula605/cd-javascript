// This is where the javascript will live.
// Using Chrome developer tools, if you look at the console, you can see the message appearing on the console.

console.log('Is the scripts file working?');

$( function() {

    //toggle projects
    $( ".title-1" ).click( function() {

        $(".project").toggleClass("show-content");
    
    });

    //toggle about
    $( ".title-2" ).click( function() {

        $(".about").toggleClass("show-content-2");
    
    });

    var elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "url('cursor url with protocol'), auto";


})