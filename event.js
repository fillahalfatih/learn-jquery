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

    $('#coords').on('click', function() {
        $('#code').toggle();
    });

    // .dblclick for double click
    // .mouseenter & .mouseleave
    // .mousemove
    // .mouseup & .mousedown

    // Focus and Blur
    $('input').on('focus', function() {
        $(this).css('background', 'pink');
    });

    $('input').on('blur', function() {
        $(this).css('background', 'white');
    });

    // $('input').keyup(function(e) {
    //     console.log(e.target.value);
    // });

    // $('select#gender').change(function(e) {
    //     alert(e.target.value);
    // });

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

    $('#table').hide();

    $('#form').on('submit', function(e) {
        e.preventDefault();
        const value = {
            Name : $('input#name').val(),
            Email : $('input#email').val(),
            Gender : $('select#gender').val(),
        }
        
        console.table(value);

        $('#table').show();
        $('#val-name').html(value.Name);
        $('#val-email').html(value.Email);
        $('#val-gender').html(value.Gender);
    });
});