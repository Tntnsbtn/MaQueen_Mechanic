function cerrarSesion() {

    Swal.fire({
        title: '¡Nos vemos pronto!',
        text: 'Has cerrado sesion correctamente',
        icon: 'success',
        showCloseButton: true,

    })

    setTimeout(function () {
        window.location.href = '/';
    }, 1500);
    
}

/* Validador Registro */
function tipoRegion() {
    let region = document.getElementById("cbxregion").value;
    let option = "";

    if (region == "0") {
        option = option + "<option value='0' selected>Seleccione una Comuna</option>";
        document.getElementById("cbxcomuna").disabled = true;
        document.getElementById("btnRegi").disabled = true;
    }

    if (region == "1") {
        option = option + "<option value='0' selected>Seleccione una Comuna</option>";
        option = option + "<option value='1'>Puente Alto</option>";
        option = option + "<option value='2'>La Florida</option>";
        option = option + "<option value='3'>La Pintana</option>";
        document.getElementById("cbxcomuna").disabled = false;
    }

    if (region == "2") {
        option = option + "<option value='0' selected>Seleccione una Comuna</option>";
        option = option + "<option value='1'>Rancagua</option>";
        option = option + "<option value='2'>Peumo</option>";
        option = option + "<option value='3'>Machalí</option>";
        document.getElementById("cbxcomuna").disabled = false;
    }

    if (region == "3") {
        option = option + "<option value='0' selected>Seleccione una Comuna</option>";
        option = option + "<option value='1'>Quintero</option>";
        option = option + "<option value='2'>Puchuncaví</option>";
        option = option + "<option value='3'>Casablanca</option>";
        document.getElementById("cbxcomuna").disabled = false;
    }

    document.getElementById("cbxcomuna").innerHTML = option;

    activarGenero();
}

function activarGenero() {
    let comuna = document.getElementById("cbxcomuna").value;

    if (comuna == "0") {
        document.getElementById("cbxgenero").disabled = true;
        document.getElementById("selecGenero").selected = true;
    }

    if (comuna == "1") {
        document.getElementById("cbxgenero").disabled = false;
    }

    if (comuna == "2") {
        document.getElementById("cbxgenero").disabled = false;
    }

    if (comuna == "3") {
        document.getElementById("cbxgenero").disabled = false;
    }
}

function activarBtnRegistrar() {
    let region = document.getElementById("cbxregion").value;
    let comuna = document.getElementById("cbxcomuna").value;
    let genero = document.getElementById("cbxgenero").value;

    if (region != 0 && comuna != 0 && genero != 0) {
        document.getElementById("btnRegi").disabled = false;

    } else {
        document.getElementById("btnRegi").disabled = true;
    }
}

function validarFormRegistro1() {
    // Variable que usaremos para determinar si el input es valido
    let resp6 = false;

    const input = document.forms['formRegistro']['txtNombre'];
    const message = document.getElementById('menjNombreRegistro1');
    const cantCaracter = 2;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp6 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp6 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp6 = false;

            } else {
                resp6 = true;

            }
        }
    }

    if (!resp6) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp6;
}

function validarFormRegistro2() {
    // Variable que usaremos para determinar si el input es valido
    let resp7 = false;

    const input = document.forms['formRegistro']['txtApellido'];
    const message = document.getElementById('menjNombreRegistro2');
    const cantCaracter = 2;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp7 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp7 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp7 = false;

            } else {
                resp7 = true;

            }
        }
    }

    if (!resp7) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp7;
}

function validarFormRegistro3() {
    // Variable que usaremos para determinar si el input es valido
    let resp8 = false;

    const input = document.forms['formRegistro']['txtEdad'];
    const message = document.getElementById('menjNombreRegistro3');

    input.willValidate = false;

    if (!input.value) {
        resp8 = false;

    } else {

        if (input.value < 18) {
            resp8 = false;

        } else {

            resp8 = true;

        }
    }

    if (!resp8) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp8;
}

function validarFormRegistro4() {
    // Variable que usaremos para determinar si el input es valido
    let resp9 = false;

    const input = document.forms['formRegistro']['txtEmail'];
    const message = document.getElementById('menjNombreRegistro4');
    const cantCaracter = 12;

    input.willValidate = false;

    if (!input.value) {
        resp9 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp9 = false;

        } else {

            resp9 = true;

        }
    }

    if (!resp9) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp9;
}

function validarFormRegistro5() {
    // Variable que usaremos para determinar si el input es valido
    let resp10 = false;

    const input = document.forms['formRegistro']['txtPassword'];
    const message = document.getElementById('menjNombreRegistro5');
    const cantCaracter = 8;

    input.willValidate = false;

    if (!input.value) {
        resp10 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp10 = false;

        } else {

            resp10 = true;

        }
    }

    if (!resp10) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp10;
}

function validarFormRegistro6() {
    // Variable que usaremos para determinar si el input es valido
    let resp10 = false;

    const input = document.forms['formRegistro']['txtPassword2'];
    const input2 = document.forms['formRegistro']['txtPassword'];
    const message = document.getElementById('menjNombreRegistro6');
    const cantCaracter = 8;

    input.willValidate = false;

    if (!input.value) {
        resp10 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp10 = false;

        } else {

            if (input2.value == input.value) {
                resp10 = true;

            } else {
                resp10 = false;
            }
        }
    }

    if (!resp10) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp10;
}

function LimpiarRegistro() {

    document.getElementById("selecRegion").selected = true;
    document.getElementById("cbxcomuna").disabled = true;
    document.getElementById("cbxgenero").disabled = true;

    document.getElementById("txtPassword").value = "";
    document.getElementById("txtPassword2").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("txtEmail").value = "";
}

function datoFaltante() {

    if (validarFormRegistro1() && validarFormRegistro2() && validarFormRegistro3() && validarFormRegistro4() && validarFormRegistro5() && validarFormRegistro6()) {

        const model2 = document.querySelector("#model2");

        model2.close();

        Swal.fire({
            title: '¡Enhorabuena!',
            text: 'Te has registrado correctamente',
            icon: 'success',
            showCloseButton: true,

        })

        LimpiarRegistro();
        document.getElementById("btnRegi").disabled = true;

    } else {

        const model2 = document.querySelector("#model2");

        model2.close();

        Swal.fire({
            title: '¡Algo ha salido mal!',
            text: 'Faltan datos, vuelve a intentarlo',
            icon: 'error',
            showCloseButton: true,

        }).then((result) => {

            if (result.dismiss || result.isConfirmed) {
                const model2 = document.querySelector("#model2");

                model2.showModal();
            }
        })
    }

}

/*
function timeOutNextPage() {
    setTimeout(function () {
        window.location.href = '../Contacto.html';
    }, 2000);
}*/

/* Validador Iniciar Sesion */
function LimpiarInicio() {
    document.getElementById("txtEmailSesion").value = "";
    document.getElementById("txtPassword3").value = "";
}

function InicarSesion() {

    let correo = document.getElementById("txtEmailSesion").value;
    let password = document.getElementById("txtPassword3").value;

    if (correo == "seba@gmail.com" && password == "seba") {

        const model1 = document.querySelector("#model1");

        model1.close();

        Swal.fire({
            title: '¡Bienvenido!',
            icon: 'success',
            showCloseButton: true,

        })

        setTimeout(function () {
            window.location.href = '/form/';
        }, 1000);

        LimpiarInicio();

    } else if (correo == "manuel@hotmail.com" && password == "manuel") {

        const model1 = document.querySelector("#model1");

        model1.close();

        Swal.fire({
            title: '¡Bienvenido!',
            icon: 'success',
            showCloseButton: true,

        })

        setTimeout(function () {
            window.location.href = '/form/';
        }, 1000);

        LimpiarInicio();

    } else if (correo == "jonathan@yahoo.com" && password == "jonathan") {

        const model1 = document.querySelector("#model1");

        model1.close();

        Swal.fire({
            title: '¡Bienvenido!',
            icon: 'success',
            showCloseButton: true,

        })

        setTimeout(function () {
            window.location.href = '/form/';
        }, 1000);

        LimpiarInicio();

    } else {

        const model1 = document.querySelector("#model1");

        model1.close();

        Swal.fire({
            title: '¡Algo salio mal!',
            text: 'Correo o contraseña incorrecta',
            icon: 'error',
            showCloseButton: true,

        }).then((result) => {

            if (result.dismiss || result.isConfirmed) {
                const model1 = document.querySelector("#model1");

                model1.showModal();
            }
        })

        LimpiarInicio();
    }

}

/* Validador Formulario Trabajo */
function validarFormTrabajo1() {
    // Variable que usaremos para determinar si el input es valido
    let resp1 = false;

    const input = document.forms['formTrabajo']['txtNombre'];
    const message = document.getElementById('menjNombreTrabajo1');
    const cantCaracter = 2;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp1 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp1 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp1 = false;

            } else {
                resp1 = true;

            }
        }
    }

    if (!resp1) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp1;
}

function validarFormTrabajo2() {
    // Variable que usaremos para determinar si el input es valido
    let resp2 = false;

    const input = document.forms['formTrabajo']['txtMarca'];
    const message = document.getElementById('menjNombreTrabajo2');
    const cantCaracter = 2;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp2 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp2 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp2 = false;

            } else {
                resp2 = true;

            }
        }
    }

    if (!resp2) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp2;
}

function validarFormTrabajo3() {
    // Variable que usaremos para determinar si el input es valido
    let resp3 = false;

    const input = document.forms['formTrabajo']['txtModelo'];
    const message = document.getElementById('menjNombreTrabajo3');
    const cantCaracter = 3;
    const caracteres = new RegExp('^[A-Z0-9]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp3 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp3 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp3 = false;

            } else {
                resp3 = true;

            }
        }
    }

    if (!resp3) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp3;
}

function validarFormTrabajo4() {
    // Variable que usaremos para determinar si el input es valido
    let resp4 = false;

    const input = document.forms['formTrabajo']['txtRespuesto'];
    const message = document.getElementById('menjNombreTrabajo4');
    const cantCaracter = 5;

    input.willValidate = false;

    if (!input.value) {
        resp4 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp4 = false;

        } else {

            resp4 = true;

        }
    }

    if (!resp4) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp4;
}

function validarFormTrabajo5() {
    // Variable que usaremos para determinar si el input es valido
    let resp5 = false;

    const input = document.forms['formTrabajo']['txtDetalle'];
    const message = document.getElementById('menjNombreTrabajo5');
    const cantCaracter = 10;

    input.willValidate = false;

    if (!input.value) {
        resp5 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp5 = false;

        } else {

            resp5 = true;

        }
    }

    if (!resp5) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp5;
}

function validarAdjuntarFile() {

    const archivo = document.getElementById('inputGroupFile02');
    let resp6 = false;

    if (archivo.files && archivo.files[0]) {

        Swal.fire({
            title: '¡Exito!',
            text: 'El archivo se ha subido correctamente',
            icon: 'success',
            showCloseButton: true,

        })

        resp6 = true;

    } else {

        Swal.fire({
            title: '¡Ops!',
            text: 'El archivo no se ha podido subir',
            icon: 'error',
            showCloseButton: true,

        })

        resp6 = false;
    }

    return resp6;
}

function datosFaltantes() {

    if (validarFormTrabajo1() == true && validarFormTrabajo2() == true && validarFormTrabajo3() == true && validarFormTrabajo4() == true && validarFormTrabajo5() == true && validarAdjuntarFile() == true) {

        Swal.fire({
            title: '¡Enhorabuena!',
            text: 'El trabajo se ha subido correctamente',
            icon: 'success',
            showCloseButton: true,

        })
    } else {

        Swal.fire({
            title: '¡Algo ha salido mal!',
            text: 'Faltan datos, vuelva a intentarlo',
            icon: 'error',
            showCloseButton: true,

        })
    }
}

/* Validador Formulario Contacto */
function limpiarContacto() {

    document.getElementById("txtNombreContacto").value = "";
    document.getElementById("txtApellidoContacto").value = "";
    document.getElementById("txtEmailContacto").value = "";
    document.getElementById("txtTelefonoContacto").value = "";
    document.getElementById("txtAsuntoContacto").value = "";
    document.getElementById("txtMensajeContacto").value = "";
    
}

function validarFormContacto1() {
    // Variable que usaremos para determinar si el input es valido
    let resp11 = false;

    const input = document.forms['formContacto']['txtNombreContacto'];
    const message = document.getElementById('menjNombreContacto1');
    const cantCaracter = 6;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp11 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp11 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp11 = false;

            } else {
                resp11 = true;

            }
        }
    }

    if (!resp11) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp11;
}

function validarFormContacto2() {
    // Variable que usaremos para determinar si el input es valido
    let resp12 = false;

    const input = document.forms['formContacto']['txtEmailContacto'];
    const message = document.getElementById('menjNombreContacto2');
    const cantCaracter = 12;

    input.willValidate = false;

    if (!input.value) {
        resp12 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp12 = false;

        } else {

            resp12 = true;

        }
    }

    if (!resp12) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp12;
}

function validarFormContacto3() {
    // Variable que usaremos para determinar si el input es valido
    let resp13 = false;

    const input = document.forms['formContacto']['txtTelefonoContacto'];
    const message = document.getElementById('menjNombreContacto3');
    const cantDigitos = 8;
    const caracteres = new RegExp('^[0-9]+$');

    input.willValidate = false;

    if (!input.value) {
        resp13 = false;

    } else {

        if (input.value.length < cantDigitos || input.value.length > cantDigitos) {
            resp13 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp13 = false;

            } else {
                resp13 = true;

            }
        }
    }

    if (!resp13) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp13;
}

function validarFormContacto4() {
    // Variable que usaremos para determinar si el input es valido
    let resp14 = false;

    const input = document.forms['formContacto']['txtAsuntoContacto'];
    const message = document.getElementById('menjNombreContacto4');
    const cantCaracter = 4;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp14 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp14 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp14 = false;

            } else {
                resp14 = true;

            }
        }
    }

    if (!resp14) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp14;
}

function validarFormContacto5() {
    // Variable que usaremos para determinar si el input es valido
    let resp15 = false;

    const input = document.forms['formContacto']['txtMensajeContacto'];
    const message = document.getElementById('menjNombreContacto5');
    const cantCaracter = 10;

    input.willValidate = false;

    if (!input.value) {
        resp15 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp15 = false;

        } else {

            resp15 = true;

        }
    }

    if (!resp15) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp15;
}

function validarFormContacto6() {
    // Variable que usaremos para determinar si el input es valido
    let resp16 = false;

    const input = document.forms['formContacto']['txtApellidoContacto'];
    const message = document.getElementById('menjApellidoContacto6');
    const cantCaracter = 3;
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    input.willValidate = false;

    if (!input.value) {
        resp16 = false;

    } else {

        if (input.value.length < cantCaracter) {
            resp16 = false;

        } else {

            if (!caracteres.test(input.value)) {
                // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
                // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
                resp16 = false;

            } else {
                resp16 = true;

            }
        }
    }

    if (!resp16) {
        input.style.border = 'red solid 2px';
        message.hidden = false;

    } else {
        input.style.border = 'palegreen solid 2px';
        message.hidden = true;
    }

    return resp16;
}

function datosFaltantes2() {

    if (validarFormContacto1() == true && validarFormContacto2() == true && validarFormContacto3() == true && validarFormContacto4() == true && validarFormContacto5() == true && validarFormContacto6() == true) {

        Swal.fire({
            title: '¡Genial!',
            text: 'Pronto te contactaremos',
            icon: 'success',
            showCloseButton: true,

        })

        limpiarContacto();

    } else {

        Swal.fire({
            title: '¡Algo ha salido mal!',
            text: 'Faltan datos, vuelva a intentarlo',
            icon: 'error',
            showCloseButton: true,

        })
    }
}





