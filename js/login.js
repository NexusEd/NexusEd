var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener('click', function(e){
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if(check == 0)
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    }
    else
    {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
})

function iniciarSesion() {
    // Obtén los valores de usuario y contraseña desde el formulario
    const usuario = document.getElementById('text').value;
    const contraseña = document.getElementById('password').value;
    console.log(usuario);
    // Realiza la validación 
    if (usuario === 'admin' && contraseña === 'admin') {
        // Si las credenciales son correctas, redirige al usuario al "home"
        window.location.href = '/NexusEd/pages/home.html';
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error (puedes personalizarlo)
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}

function openTelegram() {
    window.open('https://t.me/+yaOYtXXhVDhlYzA5', '_blank');
}
