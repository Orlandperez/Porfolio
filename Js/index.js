// Menu amburguesa
const menu = document.querySelector('i');
const links = document.querySelector('ul');

menu.addEventListener("click", () =>{
    links.classList.toggle("mobile-menu")
});  


// Inicializar EmailJS
emailjs.init('LYssx_RlQ23JTQYQd'); // Reemplaza con tu ID de usuario EmailJS

// Configuración del envío del formulario

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs
        .sendForm('service_0rfxl7j', 'template_m6q3kcl', this)
        .then(() => {
            alert('Mensaje enviado correctamente');
            location.reload(); // Recargar la página
        })
        .catch((err) => {
            alert('Error al enviar el mensaje: ' + JSON.stringify(err));
        });
});
