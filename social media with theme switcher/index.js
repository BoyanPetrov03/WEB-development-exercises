$('#switcher').change(function(){
    if($(this).is(":checked")) {
        $('h1').removeClass('light-h1');
        $('h1').addClass('dark-h1');
        $('h3').removeClass('light-h3');
        $('h3').addClass('dark-h3');
        $('.box-up').removeClass('light-upper-box');
        $('.box-up').addClass('upper-box')
        $('.boxes-down').removeClass('lower-box-light');
        $('.boxes-down').addClass('lower-box');

    } else {
        $('h1').addClass('light-h1');
        $('h1').removeClass('dark-h1');
        $('.box-up').addClass('light-upper-box');
        $('.box-up').removeClass('upper-box')
        $('h3').addClass('light-h3');
        $('h3').removeClass('dark-h3');
        $('.boxes-down').addClass('lower-box-light');
        $('.boxes-down').removeClass('lower-box');
    }
});
