$(document).ready(function () {
    'use strict'

    /* AOS Plugin */
    AOS.init();

    /* Jquery Mask Plugin
    Plugin que mascara os dados inseridos pelo usuário no formulário de contato.*/
    $('.contato-form-fone').mask('(00) 00000-0000');

    /* Jquery Plugin AutoComplete */
    $('.contato-form-email').autoEmail(
        [
            "ig.com.br", "globo.com", "bol.com.br", "hotmail.com", "outlook.com", "msn.com", "live.com", "yahoo.com", "yahoo.com.br", "terra.com.br", "uol.com.br", "sigcertificadora.com.br"
        ],
        'gmail.com'
    )

    /* Smooth Scroll */
    var scrollLink = $('.scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 700);
    });

    // Active link switch
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        
        let sectionOffset = 0;

        scrollLink.each(function () {
            if ($(this.hash).offset() != undefined) {
                sectionOffset = $(this.hash).offset().top - 20;
            }

            

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    });

});

