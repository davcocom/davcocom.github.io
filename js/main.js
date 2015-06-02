var main = function() {
    $('.area').click(function() {
        $(this).toggleClass("active");

    });
    $('.pagination').click(function() {
        $(this).toggleClass("active");
    });
};
$(document).ready(main);

function btnAgregar()
{
    location.href="uploadFile.html";
}
function btnCancelar()
{
    location.href="perfil.html";
}

