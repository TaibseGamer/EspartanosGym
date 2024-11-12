document.getElementById("boton").addEventListener("click", function(event) {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (password !== confirm) {
      event.preventDefault();
      alert("Las contraseñas no coinciden.");
    } else {
      // Limpiar los campos si la comprobación es exitosa
      alert("Registro exitoso");
      setTimeout(() => {
        document.getElementById("name").value = "";
        document.getElementById("emailAddress").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        document.getElementById("terminos").checked = false;
      }, 150);
    }
  });
  