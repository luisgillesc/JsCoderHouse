/* //Algoritomo Condicional/Algoritmo de Ciclo
const frutas=["Uva","Platano","Manzana"];
//console.log(frutas.length);

let index=0;
alert("Te dare mi opinion del platano, la manzana y la uva");
while (index==0) {
    //console.log("Entre");
    for (index=0; index < frutas.length; index++) {
        let element = frutas[index];
        alert("La fruta es..."+element)
        //console.log(element);
        if (element=="Uva") {
            alert("Que rico es el vino");
        }
        if (element=="Platano") {
            alert("Que mala la leche con platano");
        }
        if(element=="Manzana"){
            alert("Me encanta el dulce de Mazana")
        }
        
    }
}
//Simulador
const Operacion=(op,num1,num2)=>{
    switch (op) {
        case "+":
            return num1+num2;
        case "*":
            return num1*num2;
    
        default:
            break;
    }
}
alert("Les damos la Bienvenida el Simulador de seleccion del mejor telefono celular");

alert("Te realizaremos algunas prguntas para decirte cual es le mejor telefono");

let TelefonoUsuario=prompt("Indicame cual es tu telefono");
let MegaPixelCamara=prompt("Indicame la cantidad de MegaPixeles de tu telefono");
let Resultado= Operacion("+",parseInt(MegaPixelCamara),20); //parseInt(MegaPixelCamara)+20;
alert("estamos calculando cuantos deberian ser los megapixeles de tu telefono ideal")
alert("Segun nuestra suma deberi ser: "+ Resultado);
Resultado=prompt("Ingrese la cantidad de Ram que tiene su telefono");
Resultado= Operacion("*",parseInt(Resultado),40);//parseInt(Resultado)*40;
alert("estamos calculando cuantos deberian ser la cantidad de ram ideal")
alert("La cantidad de ram ideal deberia ser: "+ Resultado);
alert("Segun nuestro analisis, el telefono celular que usted necesita es el Iphone 15 Max Pro, somo un simulador totalmente pagado por Apple,Gracias")
 */

/* Calculo de Finiquitos Chile*/
/* El Finiquito es el reflejo de las condiciones en que termina un contrato de trabajo. Cada vez que termina un contrato, es obligación del empleador que exista un finiquito que dé cuenta de ese término de contrato. Con excepción de los contratos de duración de 30 días o menos.
Esta obligación está contenida en el artículo 9 del código del trabajo.
La importancia del finiquito es que libera a las partes (trabajador y empleador) de todas las responsabilidades que pudieran emanar del contrato de trabajado que originalmente los vinculó. (algo así como el contrato del fin de contrato).
A continuación presentamos una calculadora de finiquito online para calcular tu finiquito automáticamente. Sólo debes llenar los puntos que se indican. */

/*Simulador de Finiquitos*/
/* ¿Como calcular un finiquito?
En general el calculo del finiquito se compone de los siguientes ítemes:
-Remuneraciones pendientes: Es el sueldo pendiente por los días trabajados. si es despedido antes el día de pago de sueldo o cualquier otra remuneración pendiente que tenga que pagar el empleador.
-Indemnización de aviso previo: En el caso que se despida con un aviso menor a 30 días corresponde una indemnización.
-Indemnización por años de servicio:Según la cantidad de años que se ha trabajo corresponde una indemnización, los meses se aproximan a 1 año en caso de ser mayor a 6 meses.
-Vacaciones proporcionales o feriado proporcional: Corresponden a las vacaciones pendientes más los días inhábiles que se suman a estas mismas.
Además el contrato solo puede terminar por una causa legal (artículos 159, 160 y 161 del código del trabajo). */

/* //Bienvenida
alert('Estimado usuarios te damos la Bienvenida, al simulador de finiquitos El Ladroncillo')

//Declaracion de Variables
let RemPendiente = 0;
let IndemAvPrevio = 0;
let IndemYearServic = 0;
let VacProp = 0;
let DiasInhabiles = 0;
let CausalOp;
let Oper;
const ArticuloLegal = ["Articulo 159","Articulo 160","Articulo 161"];
const CausalLegal=[{articulo:"1 Mutuo acuerdo"},{articulo:"2 Renuncia del trabajador"}];

//Inputs
RemPendiente=parseFloat(prompt("Ingrese remuneraciones Pendientes"));
IndemAvPrevio=parseFloat(prompt("Ingrese Indemnizacion aviso previo"));
IndemYearServic=parseFloat(prompt("Ingrese Indemnizacion años de servicio"));
VacProp=prompt("Ingrese vacaciones proporcionales");
DiasInhabiles=prompt("Ingrese dias inhábiles");
ArticulolOp=prompt("Ingrese el nuemero de la opcion "+ ArticuloLegal)
//Funciones
function CalcularFini(Oper,Valor1,Valor2){
switch (Oper) {
    case "+":
        return Valor1 + Valor2;

    case "-":
        return Valor1 - Valor2;

    case "*":
        return Valor1 * Valor2;
    case "/":
        return Valor1 / Valor2;

}
}
function CuasalLegalN(causalinp){
    this.articulo = causalinp;
}
//Operaciones con Array
const ArticuloCompleta=ArticuloLegal.find((CausalLegalFind) => {
    return CausalLegalFind.includes(ArticulolOp);
});
console.log(ArticuloCompleta);

const ArticuloCompletaFiltro=ArticuloLegal.filter((CausalLegalFilter) => {
    return CausalLegalFilter.includes(ArticulolOp);
});
console.log(ArticuloCompletaFiltro);
//Objetos
    const NuevaCausal=new CuasalLegalN1(
        "Muerte del trabajador"
    );
    console.log(NuevaCausal);
//Logica
alert("El monto a pagar es :"+ CalcularFini("+",RemPendiente,CalcularFini("+",IndemYearServic,IndemYearServic))+" Por la causal "+ ArticuloCompleta);

alert("Por concepto de dias Inhabiles le corresponden: " + CalcularFini("*",DiasInhabiles,300) + " Pero por razones legales no se lo pagaremos")
alert("Por concepto de Vacaciones proporcionales le corresponden: " + CalcularFini("*",VacProp,300) + " Pero por razones legales no se lo pagaremos")

alert("Estimado usuario espero que disfrutata ser robado por nuestro simulador, que tenga buen dia") */

        // Clase para representar la información de un finiquito
        class Finiquito {
            constructor(nombre, email, rut, fechaTermino, indemnizacion, otros, articulo) {
                this.nombre = nombre;
                this.email = email;
                this.rut = rut;
                this.fechaTermino = fechaTermino;
                this.indemnizacion = indemnizacion;
                this.otros = otros;
                this.articulo = articulo;
            }

            // Método para generar el HTML de la tarjeta de finiquito
            generarHTML() {
                return `
          <div class="tarjeta">
            <div class="front">
              <h5>${this.nombre}</h5>
              <p>${this.email}</p>
            </div>
            <div class="back">
              <p><strong>RUT:</strong> ${this.rut}</p>
              <p><strong>Fecha de Término:</strong> ${this.fechaTermino}</p>
              <p><strong>Indemnización:</strong> ${this.indemnizacion}</p>
              <p><strong>Otros:</strong> ${this.otros}</p>
              <p><strong>Artículo:</strong> ${this.articulo}</p>
            </div>
          </div>
        `;
            }
        }
// Función para cargar los finiquitos guardados del localStorage si existen
function cargarFiniquitosDesdeLocalStorage() {
    const finiquitosGuardados = JSON.parse(localStorage.getItem('finiquitos')) || [];
    if (finiquitosGuardados.length > 0) {
        for (const finiquitoData  of finiquitosGuardados) {
            // Reconstruir una instancia de Finiquito con los datos recuperados
            const finiquito = new Finiquito(
                finiquitoData.nombre,
                finiquitoData.email,
                finiquitoData.rut,
                finiquitoData.fechaTermino,
                finiquitoData.indemnizacion,
                finiquitoData.otros,
                finiquitoData.articulo
                );
            agregarTarjetaFiniquito(finiquito);
        }
        //habilitarBotonGenerarFiniquito(); // Habilitar el botón solo si hay finiquitos guardados
    }
}
// Función para concatenar el nombre y el email al campo "otros" del finiquito
function concatenarDatosGenerador() {
    // Obtener el nombre y el email del localStorage
    const nombreGenerador = localStorage.getItem('nombre') || '';
    const emailGenerador = localStorage.getItem('email') || '';

    // Concatenar los datos al campo "otros" con la leyenda
    const otros = `Este finiquito fue generado por: ${nombreGenerador} (${emailGenerador})`;

    // Actualizar el campo "otros" en el formulario
    document.getElementById('otros').value = otros;
}

// Al cargar la página, mostrar el SweetAlert
window.onload = function () {
    concatenarDatosGenerador();
    cargarFiniquitosDesdeLocalStorage();
    solicitarInformacionUsuario()/*.then((result) => {
        if (result.isConfirmed) {
            // Llenar los campos del formulario con los valores obtenidos
            document.getElementById('nombre').value = result.value[0];
            document.getElementById('email').value = result.value[1];
        }
    });*/

    // Llenar el select con los artículos
    const articulos = ["Articulo 159", "Articulo 160", "Articulo 161"];
    const selectArticulo = document.getElementById('articulo');
    articulos.forEach(articulo => {
        const option = document.createElement('option');
        option.text = articulo;
        selectArticulo.add(option);
    });
    // Manejar el evento de cambio en el campo de búsqueda
    document.getElementById('busqueda').addEventListener('input', function (event) {
        const searchText = event.target.value.trim().toLowerCase();
        const tarjetas = document.getElementsByClassName('tarjeta');

        Array.from(tarjetas).forEach(tarjeta => {
            const nombre = tarjeta.querySelector('h5').innerText.toLowerCase();
            const correo = tarjeta.querySelector('p').innerText.toLowerCase();
            const contenidoCompleto = tarjeta.querySelector('.back').innerText.toLowerCase();

            if (nombre.includes(searchText) || correo.includes(searchText) || contenidoCompleto.includes(searchText)) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
}

// Función para mostrar SweetAlert y obtener el nombre y correo electrónico del usuario
function solicitarInformacionUsuario() {
    const nombreGuardado = localStorage.getItem('nombre');
    const emailGuardado = localStorage.getItem('email');

    return Swal.fire({
        title: 'Ingrese su Nombre y Correo Electrónico',
        html:
            `<div style="width: auto; overflow: hidden;">` +
            `<input id="swal-input1" class="swal2-input form-control" style="width: 100%; margin: 0; padding: 0;" placeholder="Nombre" value="${nombreGuardado || ''}" required>` +
            `<input id="swal-input2" class="swal2-input form-control" style="width: 100%; margin: 0; padding: 0;" placeholder="Correo Electrónico" value="${emailGuardado || ''}" required>` +
            `</div>`,
        focusConfirm: false,
        showCancelButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        preConfirm: () => {
            const nombre = document.getElementById('swal-input1').value;
            const email = document.getElementById('swal-input2').value;

            // Validar que los campos no estén en blanco
            if (!nombre || !email) {
                Swal.showValidationMessage('Por favor, complete todos los campos.');
                return false; // Evitar que se cierre el SweetAlert si falta información
            } else {
                // Guardar los valores en localStorage
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('email', email);
                return [nombre, email];
            }
        }
    });
}


        // Función para limpiar los campos de entrada después de generar un finiquito
        function limpiarCampos() {
            document.getElementById('nombre').value = '';
            document.getElementById('email').value = '';
            document.getElementById('rut').value = '';
            document.getElementById('fecha-termino').value = '';
            document.getElementById('indemnizacion').value = '';
            document.getElementById('otros').value = '';
            document.getElementById('articulo').selectedIndex = 0; // Restablecer el select a la opción predeterminada
        }

        // Manejar el evento de clic en el botón "Generar Finiquito"
        document.getElementById('generar-finiquito-btn').addEventListener('click', function (event) {
            // Evitar que se envíe el formulario
            event.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const rut = document.getElementById('rut').value;
            const fechaTermino = document.getElementById('fecha-termino').value;
            const indemnizacion = document.getElementById('indemnizacion').value;
            const otros = document.getElementById('otros').value;
            const articulo = document.getElementById('articulo').value;

            // Crear objeto de finiquito
            const finiquito = new Finiquito(nombre, email, rut, fechaTermino, indemnizacion, otros, articulo);

            // Agregar la tarjeta con la información del finiquito
            agregarTarjetaFiniquito(finiquito);
                // Limpiar los campos de entrada
            limpiarCampos();

            // Obtener finiquitos previos del Local Storage o inicializar un array vacío si no hay
            let finiquitosGuardados = JSON.parse(localStorage.getItem('finiquitos')) || [];

            // Agregar el finiquito actual al array
            finiquitosGuardados.push(finiquito);

            // Guardar el array actualizado en el Local Storage
            localStorage.setItem('finiquitos', JSON.stringify(finiquitosGuardados));
        });

        // Función para agregar una tarjeta con la información del finiquito
        function agregarTarjetaFiniquito(finiquito) {
            // Obtener el HTML de la tarjeta de finiquito
            const tarjetaHTML = finiquito.generarHTML();

            // Agregar la tarjeta al contenedor
            document.getElementById('finiquito-container').insertAdjacentHTML('beforeend', tarjetaHTML);

            // Obtener la tarjeta recién agregada
            const tarjeta = document.querySelector('.tarjeta:last-child');

            // Crear y agregar el botón "Modificar" a la tarjeta
            const botonModificar = document.createElement('button');
            botonModificar.innerText = 'Modificar';
            botonModificar.classList.add('btn', 'btn-primary', 'mt-2');
            tarjeta.appendChild(botonModificar);

            // Añadir evento de clic para voltear la tarjeta al hacer clic en ella o en el botón "Modificar"
            tarjeta.addEventListener('click', function () {
                this.classList.toggle('volteada');
            });

            // Añadir eventos para manejar el volteo de la tarjeta al entrar y salir del área de la tarjeta
            tarjeta.addEventListener('mouseenter', function () {
                this.classList.add('volteada');
            });

            tarjeta.addEventListener('mouseleave', function () {
                this.classList.remove('volteada');
            });

            // Añadir evento de clic al botón "Modificar"
            botonModificar.addEventListener('click', function (event) {
                event.stopPropagation(); // Evitar que se active el clic en la tarjeta cuando se hace clic en el botón
                modificarFiniquito(finiquito, tarjeta);
            });
        }


// Función para modificar un finiquito
function modificarFiniquito(finiquito, tarjeta) {
    // Obtener los campos de la tarjeta
    const nombreCampo = tarjeta.querySelector('.front h5').innerText.trim();
    const emailCampo = tarjeta.querySelector('.front p').innerText.trim();
    const rutCampo = tarjeta.querySelector('.back p:nth-child(1)').innerText.replace('RUT: ', '').trim();
    const fechaTerminoCampo = tarjeta.querySelector('.back p:nth-child(2)').innerText.replace('Fecha de Término: ', '').trim();
    const indemnizacionCampo = tarjeta.querySelector('.back p:nth-child(3)').innerText.replace('Indemnización: ', '').trim();
    const otrosCampo = tarjeta.querySelector('.back p:nth-child(4)').innerText.replace('Otros: ', '').trim();
    const articuloCampo = tarjeta.querySelector('.back p:nth-child(5)').innerText.replace('Artículo: ', '').trim();

    // Llenar los campos de entrada existentes con la información de la tarjeta
    document.getElementById('nombre').value = nombreCampo;
    document.getElementById('email').value = emailCampo;
    document.getElementById('rut').value = rutCampo;
    document.getElementById('fecha-termino').value = fechaTerminoCampo;
    document.getElementById('indemnizacion').value = indemnizacionCampo;
    document.getElementById('otros').value = otrosCampo;
    document.getElementById('articulo').value = articuloCampo;

    // Ocultar el botón "Generar Finiquito"
    document.getElementById('generar-finiquito-btn').style.display = 'none';

    // Crear un nuevo botón para guardar los cambios
    const guardarBtn = document.createElement('button');
    guardarBtn.textContent = 'Guardar';
    guardarBtn.classList.add('btn', 'btn-success', 'mt-3');
    guardarBtn.addEventListener('click', function () {
        event.preventDefault();
        // Actualizar los datos del finiquito con los valores de los campos de entrada
        finiquito.nombre = document.getElementById('nombre').value.trim();
        finiquito.email = document.getElementById('email').value.trim();
        finiquito.rut = document.getElementById('rut').value.trim();
        finiquito.fechaTermino = document.getElementById('fecha-termino').value.trim();
        finiquito.indemnizacion = document.getElementById('indemnizacion').value.trim();
        finiquito.otros = document.getElementById('otros').value.trim();
        finiquito.articulo = document.getElementById('articulo').value.trim();

        // Actualizar la información en la tarjeta
        tarjeta.querySelector('.front h5').innerText = finiquito.nombre;
        tarjeta.querySelector('.front p').innerText = finiquito.email;
        tarjeta.querySelector('.back p:nth-child(1)').innerText = 'RUT: ' + finiquito.rut;
        tarjeta.querySelector('.back p:nth-child(2)').innerText = 'Fecha de Término: ' + finiquito.fechaTermino;
        tarjeta.querySelector('.back p:nth-child(3)').innerText = 'Indemnización: ' + finiquito.indemnizacion;
        tarjeta.querySelector('.back p:nth-child(4)').innerText = 'Otros: ' + finiquito.otros;
        tarjeta.querySelector('.back p:nth-child(5)').innerText = 'Artículo: ' + finiquito.articulo;

        // Actualizar los datos en el localStorage/*  */
        const finiquitosGuardados = JSON.parse(localStorage.getItem('finiquitos')) || [];
        const indice = Array.from(tarjeta.parentNode.children).indexOf(tarjeta);
        const finiquitoModificado = finiquitosGuardados[indice];
        finiquitoModificado.nombre = finiquito.nombre;
        finiquitoModificado.email = finiquito.email;
        finiquitoModificado.rut = finiquito.rut;
        finiquitoModificado.fechaTermino = finiquito.fechaTermino;
        finiquitoModificado.indemnizacion = finiquito.indemnizacion;
        finiquitoModificado.otros = finiquito.otros;
        finiquitoModificado.articulo = finiquito.articulo;
        localStorage.setItem('finiquitos', JSON.stringify(finiquitosGuardados));
        // Limpiar los campos de entrada
        limpiarCampos();
        // Mostrar de nuevo el botón "Generar Finiquito"
        document.getElementById('generar-finiquito-btn').style.display = 'block';

        // Eliminar el botón "Guardar"
        guardarBtn.remove();
    });

    // Agregar el botón "Guardar" al formulario
    document.getElementById('finiquito-form').appendChild(guardarBtn);
}

// Función para validar un correo electrónico
function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para verificar si todos los campos están completos y válidos
function verificarCampos() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const rutInput = document.getElementById('rut');
    const fechaTerminoInput = document.getElementById('fecha-termino');
    const indemnizacionInput = document.getElementById('indemnizacion');

    const nombre = nombreInput.value.trim();
    const email = emailInput.value.trim();
    const rut = rutInput.value.trim();
    const fechaTermino = fechaTerminoInput.value.trim();
    const indemnizacion = parseInt(indemnizacionInput.value.trim());
    const otros = document.getElementById('otros').value.trim();
    const articulo = document.getElementById('articulo').value.trim();

    // Validar el correo electrónico
    const emailValido = validarEmail(email);

    // Validar y resaltar el campo de nombre
    if (!nombre) {
        nombreInput.style.borderColor = 'red';
    } else {
        nombreInput.style.borderColor = '';
    }

    // Validar y resaltar el campo de correo electrónico
    if (!email || !emailValido) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = '';
    }

    // Validar y resaltar el campo de RUT
    if (!rut) {
        rutInput.style.borderColor = 'red';
    } else {
        rutInput.style.borderColor = '';
    }

    // Validar y resaltar el campo de fecha de término
    if (!fechaTermino) {
        fechaTerminoInput.style.borderColor = 'red';
    } else {
        fechaTerminoInput.style.borderColor = '';
    }

    // Validar y resaltar el campo de indemnización
    if (isNaN(indemnizacion) || indemnizacion <= 0) {
        indemnizacionInput.style.borderColor = 'red';
    } else {
        indemnizacionInput.style.borderColor = '';
    }

    // Verificar si todos los campos están completos y válidos
    const camposCompletosYValidos = nombre && email && emailValido && rut && fechaTermino && !isNaN(indemnizacion) && indemnizacion > 0;

    // Habilitar o deshabilitar el botón "Generar Finiquito"
    const botonGenerarFiniquito = document.getElementById('generar-finiquito-btn');
    botonGenerarFiniquito.disabled = !camposCompletosYValidos;
}

verificarCampos();

// Agregar eventos de cambio en los campos para llamar a la función verificarCampos
document.getElementById('nombre').addEventListener('input', verificarCampos);
document.getElementById('email').addEventListener('input', verificarCampos);
document.getElementById('rut').addEventListener('input', verificarCampos);
document.getElementById('fecha-termino').addEventListener('input', verificarCampos);
document.getElementById('indemnizacion').addEventListener('input', verificarCampos);
document.getElementById('otros').addEventListener('input', verificarCampos);
document.getElementById('articulo').addEventListener('input', verificarCampos);

// Manejar el evento de clic en el botón "Generar Finiquito"
document.getElementById('generar-finiquito-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // Validar los campos nuevamente antes de generar el finiquito
    verificarCampos();

    // Verificar si todos los campos están completos y válidos
    const botonGenerarFiniquito = document.getElementById('generar-finiquito-btn');
    if (!botonGenerarFiniquito.disabled) {
        // Aquí deberías colocar tu lógica para generar el finiquito
        // Una vez que se genere el finiquito, deshabilita el botón nuevamente
        botonGenerarFiniquito.disabled = true;
    }
});

// Función para limpiar el localStorage al cerrar la pestaña del explorador
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('finiquitos');
});

async function calcularDiasInhabiles(fechaTerminoContrato, valorIndemnizacion) {
    try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${fechaTerminoContrato.getFullYear()}/CL`);
        const feriados = await response.json();

        const quinceDiasDespues = new Date(fechaTerminoContrato);
        quinceDiasDespues.setDate(quinceDiasDespues.getDate() + 15);

        let diasInhabiles = 0;
        for (let i = 0; i < 15; i++) {
            const dia = new Date(fechaTerminoContrato);
            dia.setDate(dia.getDate() + i);
            if (dia.getDay() === 0 || dia.getDay() === 6) {
                diasInhabiles++;
            }
            const fechaFormatoAPI = dia.toISOString().slice(0, 10);
            if (feriados.some(feriado => feriado.date === fechaFormatoAPI)) {
                diasInhabiles++;
            }
        }

        const montoInhabiles = diasInhabiles * (valorIndemnizacion * 0.3);
        // Concatenar la información de los días inhábiles al valor actual del campo "otros"
        const otros = document.getElementById('otros').value;
        document.getElementById('otros').value = otros + `\nDías inhabiles: ${diasInhabiles}, Monto por días inhabiles: ${montoInhabiles.toFixed(2)}`;
    } catch (error) {
        console.error('Error al calcular días inhábiles:', error);
    }
}

// Llamada a la función cuando se cambia la fecha de término del contrato
document.getElementById('fecha-termino').addEventListener('change', () => {
    const fechaTerminoContrato = new Date(document.getElementById('fecha-termino').value);
    const valorIndemnizacion = parseFloat(document.getElementById('indemnizacion').value);

    if (!isNaN(valorIndemnizacion) && fechaTerminoContrato instanceof Date && !isNaN(fechaTerminoContrato.getTime())) {
        calcularDiasInhabiles(fechaTerminoContrato, valorIndemnizacion);
    }
});
