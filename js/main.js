/*let isClosing = false;

window.addEventListener('beforeunload', function() {
    isClosing = true;
    localStorage.removeItem('finiquitos');
});

window.addEventListener('load', function() {
    if (!isClosing) {
        // Aquí puedes agregar cualquier lógica que deseas ejecutar solo cuando la página se carga inicialmente,
        // pero no cuando se cierra o actualiza
        console.log("Carga de pagina");
    }
});*/

 
 
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
    cargarFiniquitosDesdeLocalStorage();
    solicitarInformacionUsuario()/*.then((result) => {
        if (result.isConfirmed) {
            // Llenar los campos del formulario con los valores obtenidos
            document.getElementById('nombre').value = result.value[0];
            document.getElementById('email').value = result.value[1];
        }
    });*/
    concatenarDatosGenerador();
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
        const botonGenerarFiniquito = document.getElementById('generar-finiquito-btn');
        if (!botonGenerarFiniquito.disabled) {
            // Aquí deberías colocar tu lógica para generar el finiquito
            // Una vez que se genere el finiquito, deshabilita el botón nuevamente
            botonGenerarFiniquito.disabled = true;
        }
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

async function calcularDiasInhabiles(fechaTerminoContrato, valorIndemnizacion) {
    try {
        const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${fechaTerminoContrato.getFullYear()}/CL`);
        const feriados = await response.json();

        let diasInhabiles = 0;
        const quinceDiasDespues = new Date(fechaTerminoContrato);
        quinceDiasDespues.setDate(quinceDiasDespues.getDate() + 15);

        const unDia = 24 * 60 * 60 * 1000; // Milisegundos en un día
        for (let dia = new Date(fechaTerminoContrato); dia <= quinceDiasDespues; dia.setDate(dia.getDate() + 1)) {
            if (dia.getDay() === 0 || dia.getDay() === 6) { // Día sábado o domingo
                diasInhabiles++;
            } else {
                const fechaFormatoAPI = dia.toISOString().slice(0, 10);
                if (feriados.some(feriado => feriado.date === fechaFormatoAPI)) {
                    diasInhabiles++;
                }
            }
        }

        const montoInhabiles = diasInhabiles * (valorIndemnizacion * 0.3);
        // Concatenar la información de los días inhábiles al valor actual del campo "otros"
        const totalAPagar = valorIndemnizacion + montoInhabiles;
        const otros = document.getElementById('otros').value;
        document.getElementById('otros').value = otros + `\nDías inhabiles: ${diasInhabiles}, Monto por días inhabiles: ${montoInhabiles.toFixed(2)}\nEl monto a pagar al trabajador es: $${totalAPagar.toLocaleString('es-CL')}.`;
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
