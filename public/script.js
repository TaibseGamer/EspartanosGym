console.log("entrando a comprobación");
document.addEventListener("DOMContentLoaded", function () {
    console.log("entrando a comprobación 2");
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("contraseña");
    const confirmPasswordInput = document.getElementById("confirmar");

    form.addEventListener("submit", function (event) {
        // Validar si las contraseñas coinciden
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault(); // Detiene el envío del formulario
            alert("Las contraseñas no coinciden. Por favor, verifica e inténtalo de nuevo.");
            return; // Detiene la ejecución de la función
        }

        // Validaciones adicionales (si es necesario)
        if (!document.getElementById("terminos").checked) {
            event.preventDefault();
            alert("Debes aceptar los términos y condiciones.");
            return;
        }
    });
});
