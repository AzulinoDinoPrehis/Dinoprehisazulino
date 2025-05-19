document.addEventListener('DOMContentLoaded', function() {
    const perfil1 = document.getElementById('perfil1');
    const perfil2 = document.getElementById('perfil2');
    const imagenOculta = document.getElementById('imagen-oculta');

    let perfil1Clicked = false;
    let perfil2Clicked = false;

    perfil1.addEventListener('click', function() {
        perfil1Clicked = true;
        if (perfil1Clicked && perfil2Clicked) {
            imagenOculta.style.display = 'block';
        }
    });

    perfil2.addEventListener('click', function() {
        perfil2Clicked = true;
        if (perfil1Clicked && perfil2Clicked) {
            imagenOculta.style.display = 'block';
        }
    });
});
