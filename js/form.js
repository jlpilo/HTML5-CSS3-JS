var form =  document.getElementsByTagName('form')[0];

var inputNombre = document.getElementById("nombre");
var inputApellidos = document.getElementById("apellidos");
var inputEmail = document.getElementById("email");
var inputPhone = document.getElementById("phone");
var inputOrigen = document.getElementById("origen_contacto");
var inputConsulta = document.getElementById("consulta");
var submitButton = document.getElementById("enviar");

var inputOrigen = {
    origen1: document.getElementById("origen_1"),
    origen2: document.getElementById("origen_2"),
    origen3: document.getElementById("origen_3"),
    //origen4: document.getElementById("origen_4")
};



var radioOtros = document.getElementById('origen_4');
var textOtros = document.getElementById('origen_otro');
var cambiaorigen = document.getElementsByClassName('origen');

for (var i = 0; i < cambiaorigen.length; i++) {
    cambiaorigen[i].addEventListener('click', function (event) {
        textOtros.classList.remove('visto');
        textOtros.classList.add('oculto');
    });
}


radioOtros.addEventListener("click", function (event) {
    console.log('lll');
   textOtros.classList.remove('oculto');
   textOtros.classList.add('visto');
});


var loadingIcon = document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

form.addEventListener("submit", function (event) {
    
    if (inputNombre.checkValidity() === false) {
        alert("Escriba su nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if (inputApellidos.checkValidity() === false) {
        alert("Escriba sus apellidos");
        inputApellidos.focus();
        event.preventDefault();
        return false;
    }

    if (inputEmail.checkValidity() === false) {
        alert("Introduzca un email correcto");
        inputEmail.focus();
        event.preventDefault();
        return false;
    }
    if (inputPhone.checkValidity() === false) {
        alert("Introduza un teléfono de contacto");
        inputPhone.focus();
        event.preventDefault();
        return false;
    }

    if (inputOrigen.origen1.checkValidity() === false && inputOrigen.origen2.checkValidity() === false && inputOrigen.origen3.checkValidity() === false) {
        alert("Introduce el tipo de mision");
        event.preventDefault();
        return false;
    }

    if (inputConsulta.checkValidity() === false) {
        alert("Por favor escriba su consulta");
        inputConsulta.focus();
        event.preventDefault();
        return false;
    }
    var consultaLenght=inputConsulta.value.split(" ").length;
    if (consultaLenght > 150) {
        alert("La consulta no puede tener mas de 150 palabras");
        inputConsulta.focus();
        event.preventDefault();
        return false;
    }
    

    submitButton.setAttribute("disabled", "");
    submitButton.appendChild(loadingIcon);
    event.preventDefault();

    setTimeout(function () {
        form.reset();
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        sendNotification("Formulario recibido", "Body de ejemplo");
    }, 1000);
});
