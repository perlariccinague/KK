function slideSwitch(switchSpeed) {

    var $active = jQuery('#slideShow img.active');
    if ( $active.length == 0 ) $active = jQuery('#slideShow img:last');
    var $next =  $active.next('img').length ? $active.next('img')

        : jQuery('#slideShow img:first');
    $active.addClass('last-active').fadeOut(switchSpeed);
    $next.addClass('active').fadeIn(switchSpeed);

    $active.removeClass('active last-active');
}

jQuery(function() {
    interval = "";

    jQuery('#slideShow img:first').css("display", "block").addClass('active');

    interval = setInterval ( "slideSwitch(3000)", 4000 );
});