/*
    Template: Multiplex - Private Theatre Hall
    Author: Gentechtree & Multiplex
    Version: 1.0
    Design and Developed by: Gentechtree & Multiplex
*/

/*====================================
    [  Table of contents  ]
    ======================================
    ==> Hide Footer [IMP]
    ==> Page Loader
    ==> Back To Top
    ======================================
    [ End table content ]
    ======================================
*/

if(window.location.href.includes('hide-') === true){
    var style = document.createElement('style');
    style.innerHTML = `
    .footer-iframe {
    display: none !important;
    }
    `;
    document.head.appendChild(style);
}

(function(jQuery) {
    "use strict";
    jQuery(window).on('load', function(e) {
        
        jQuery('p:empty').remove();
        
        /*------------------------
            Page Loader
        --------------------------*/
        jQuery("#gen-loading").fadeOut();
        jQuery("#gen-loading").delay(0).fadeOut("slow");
        
        /*------------------------
            Back To Top
        --------------------------*/
        jQuery('#back-to-top').fadeOut();
        jQuery(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('#back-to-top').fadeIn(1400);
                } else {
                jQuery('#back-to-top').fadeOut(400);
            }
        });
        jQuery('#top').on('click', function() {
            jQuery('top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        if(jQuery('.tv-show-back-data').length)
        {
            var url = jQuery('.tv-show-back-data').data('url');
            console.log(url);
            var html = '';
            html += `<div class="tv-single-background">
            <img src="`+url+`">
            </div>`;
            jQuery('#main').prepend(html);
            
        }
    });
})(jQuery);