// This is where the javascript will live.
// Using Chrome developer tools, if you look at the console, you can see the message appearing on the console.

console.log('Is the scripts file working?');

$( function() {

    //toggle pink button
    $( ".button-pink" ).click( function() {

        $(".container").toggleClass("pinkmode");

    });

    //toggle green button
    $( ".button-green" ).click( function() {

        $(".container").toggleClass("greenmode");

    });

    //toggle arabic about
    $( "#arb" ).click( function() {

         $(".container").toggleClass("arabic");
    
    });

    //toggle projects
    $( "#projects" ).click( function() {

        $(".container").toggleClass("show");
   
   });

    //toggle projects
    $( "#assignments" ).click( function() {

        $(".container").toggleClass("show-2");
   
   });

})