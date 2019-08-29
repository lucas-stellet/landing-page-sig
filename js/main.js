$(document).ready(function () {
    'use strict'
    
    /* AOS Plugin */
    AOS.init();

    /* Jquery Mask Plugin
    Plugin que mascara os dados inseridos pelo usuário no formulário de contato.*/
    $('#contato-form-fone').mask('(00) 00000-0000');

    /* Awesomplete Plugin */
    new Awesomplete('input[type="email"]', {
        list: ["ig.com.br", "globo.com", "bol.com.br", "gmail.com", "googlemail.com", "google.com", "hotmail.com", "outlook.com","msn.com", "live.com", "yahoo.com", "yahoo.com.br", "terra.com.br"],
        data: function (text, input) {
            return input.slice(0, input.indexOf("@")) + "@" + text;
        },
        filter: Awesomplete.FILTER_STARTSWITH
    });

    // smooth scrolling
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

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

});

