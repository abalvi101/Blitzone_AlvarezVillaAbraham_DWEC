const validarRegistro = () => {
    let inputs = document.querySelectorAll(".form input");
    let patt = new RegExp(/^[A-Za-z0-9]+$/);
    let mail = new RegExp(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
    let pswd = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/);
    let successful = true;
    if (!inputs[0].value) {
        alert("Introduce un nombre de usuario.");
        successful = false;
    } else if (!patt.test(inputs[0].value)) {
        alert("El nombre solo puede contener letras y números.");
        successful = false;
    }
    if (!inputs[1].value) {
        alert("Introduce una dirección de correo electrónico.");
        successful = false;
    } else if (!mail.test(inputs[1].value)) {
        alert("Introduce una dirección de correo electrónico válida.");
        successful = false;
    }
    if (!inputs[2].value) {
        alert("Introduce una fecha de nacimiento");
        successful = false;
    } else if (calcularEdad(inputs[2].value) < 18) {
        alert("Debe tener al menos 18 años para poder registrarse");
        successful = false;
    }
    if (!inputs[3].value) {
        alert(("Introduce una contraseña"));
        successful = false;
    } else if (!pswd.test([inputs[3].value])) {
        alert(("La contraseña debe tener entre 8 y 16 caracteres y contener al menos una mayúscula, una minúscula y un número."));
        successful = false;
    }
    if (inputs[3].value !== inputs[4].value) {
        alert("Las contraseñas no coinciden.");
        successful = false;
    }

    if (successful) {
        alert("Se ha registrado con éxito.")
    }

}

const calcularEdad = (fecha) => {
    var hoy = new Date();
    var cumpleanos = new Date(+fecha.substr(0, 4), +fecha.substr(5, 2) - 1, +fecha.substr(8, 2));
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}