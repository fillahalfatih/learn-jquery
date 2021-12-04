$(document).ready(function(){
    $('span').css('color', 'red');

    $('span').click(function(){
        $('#container').css({
            'color': 'white',
            'background': 'grey'
        });
    });

    $('h1#heading1').mouseenter(function(){
        $('ul#list li:odd').css('background', 'salmon');
    });

    $('h1.heading2').mouseenter(function(){
        $('ul#list li:even').css('color', 'red');
    });

    $(':button').hide();

    $('[href]').css({
        'background': 'lightblue',
        'color': 'black',
        'text-decoration': 'none'
    });
});