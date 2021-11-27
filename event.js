$(document).ready(function() {
    $('#btn1').on('click', function() {
        $('.para1').hide();
    });

    $('#btn2').on('click', function() {
        $('.para1').show();
    });
    
    // togle method 
    $('#toggle').on('click', function() {
        $('.para1').toggle();
    });

    // .dblclick for double click
    // .mouseenter & .mouseleave
    // .mousemove
    // .mouseup & .mousedown

    $('#btn1').on('click', function(e) {
        // console.log(e);
        console.log(e.currentTarget.id);
        // console.log(e.currentTarget.className);
        console.log(e.currentTarget.classList);
        console.log(e.currentTarget.outerHTML);
    });

    $(document).on('mousemove', function(e) {
        $('#code').html('coords: Y : '+ e.clientY + ' ' + 'X : ' + e.clientX);
    });
});