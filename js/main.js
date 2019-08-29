$(document).ready(function () {
    'use strict'

    /* Jquery Mask Plugin
    Plugin que mascara os dados inseridos pelo usuário no formulário de contato.*/
    $('#contato-form-fone').mask('(00) 00000-0000');

    /* Awesomplete Plugin */
    new Awesomplete('input[type="email"]', {
        list: ["aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com", "live.com", "sbcglobal.net", "verizon.net", "yahoo.com", "yahoo.co.uk"],
        data: function (text, input) {
            return input.slice(0, input.indexOf("@")) + "@" + text;
        },
        filter: Awesomplete.FILTER_STARTSWITH
    });
});

