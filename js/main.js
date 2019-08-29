$(document).ready(function () {
    'use strict'

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
});

