"use strict";

$(document).ready(function () {

    // INSERT JAVASCRIPT CODE SAMPLE HERE
    //alert('Ready');
    $('h1').css('font-size', '40px');
    $('.ul-class').css('color', 'green');
    // var value = $('#tittleNew').val();
    // alert(value);
    var multipleValues = $( "#multiple1" ).val() || [];
    alert(multipleValues);
    // When using jQuery 3:
    // var multipleValues = $( "#multiple" ).val();
    $( "p" ).html( "<b>Single:</b> " + singleValues +
        " <b>Multiple:</b> " + multipleValues.join( ", " ) );
    console.log(multipleValues);
});