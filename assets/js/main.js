$(document).ready(function () {
    var audio = document.getElementById('player');

    // Función para intentar reproducir audio con forzado
    function reproducirMusica() {
        audio.load(); // Fuerza al navegador a recargar el archivo
        var playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Audio iniciado!");
            }).catch(error => {
                console.log("Reproducción automática bloqueada. Usa el botón de volumen.");
            });
        }
    }

    // Botón de pánico (Clic manual para música)
    $('#panic-button').click(function() {
        reproducirMusica();
        $(this).fadeOut(); // Desaparece al activarse
    });

    $('.valentines-day').click(function () {
        // Al dar clic en el sobre, intentamos activar música
        reproducirMusica();

        $('.envelope').css({ 'animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, 
                step: function (now) {
                    var scale = 0.1 + (now * 0.9);
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            });
            iniciarLluvia();
        });
    });

    function iniciarLluvia() {
        const iconos = ['🌻', '❤️', '🌻', '✨'];
        for (let i = 0; i < 30; i++) {
            let elemento = $('<div class="girasol"></div>').text(iconos[Math.floor(Math.random() * iconos.length)]);
            $('body').append(elemento);
            let x = Math.random() * $(window).width();
            let duracion = 3 + Math.random() * 4;
            let size = 15 + Math.random() * 25;
            elemento.css({
                'left': x + 'px', 'top': '-50px', 'font-size': size + 'px',
                'animation': `caer ${duracion}s linear infinite`
            });
        }
    }
});