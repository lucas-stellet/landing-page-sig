jQuery(document).ready(function () {
    contador();

    $(window).scroll(function () {
        var y = $(this).scrollTop();

        if (y > 900) {
            console.log('mercado');
            contador();
        } else {
            // $('.bottomMenu').fadeOut();
        }
    });
});

function contador() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
    $('.counter2').counterUp({
        delay: 10,
        time: 3000,
        offset: 70,
        beginAt: 15,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
}
var text = document.getElementsByClassName('counter');