
$(document).ready(function() {

    // Add class
    // $('p.para2').addClass('myClass');
    // Remove class
    // $('p.para2').removeClass('myClass');
    // Toggle class
    $('#btn1').on('click', function() {
       $('p.para1').toggleClass('myClass');
       $('p.para2').toggleClass('myClass');
    });

    // Add a text & HTML elements
    // $('#myDiv').html('<h2>Hello World!</h2>');
    // $('#myDiv').text('Hello World!');

    // get an HTML value
    // alert($('#myDiv').text());

    $('ul').append('<li><b>Append</b> list item</li>');
    $('ul').prepend('<li><b>Prepend</b> list item</li>');
    // $('li.list-item-2').appendTo('li.list-item-3');
    $('ul').before('<h4>Before the <code>ul</code></h4>');
    $('ul').after('<h4>After the <code>ul</code></h4>');

    // .empty = Hide an inner elements
    // $('ul').empty();
    // .detach = Delete an inner elements
    // $('ul').detach();

    $('#btn-append-to').on('click', function() {
        $('ul').toggle();
    });

    // switch theme with .toggleClass
    $('#switch-theme').on('click', function() {
        $('#container').toggleClass('switch-theme');
        // $('body').toggleClass('switch-theme');
    });
})