function obtenerDatosFormulario() {
    return {
        codigoPrograma: document.getElementById('codigoPrograma').value.trim(),
        nombrePrograma: document.getElementById('nombrePrograma').value.trim(),
        duracionPrograma: document.getElementById('duracionPrograma').value.trim(),
        modalidadPrograma: document.getElementById('modalidadPrograma').value,
        fechaInicioPrograma: document.getElementById('fechaInicioPrograma').value
    };
}

function validarPrograma(programa) {
    return (
        programa.codigoPrograma &&
        programa.nombrePrograma &&
        programa.duracionPrograma &&
        programa.modalidadPrograma &&
        programa.fechaInicioPrograma
    );
}

function cargarFormulario(programa) {
    document.getElementById('codigoPrograma').value = programa.codigoPrograma;
    document.getElementById('nombrePrograma').value = programa.nombrePrograma;
    document.getElementById('duracionPrograma').value = programa.duracionPrograma;
    document.getElementById('modalidadPrograma').value = programa.modalidadPrograma;
    document.getElementById('fechaInicioPrograma').value = programa.fechaInicioPrograma;
}

function limpiarFormulario() {
    document.getElementById('codigoPrograma').value = '';
    document.getElementById('nombrePrograma').value = '';
    document.getElementById('duracionPrograma').value = '';
    document.getElementById('modalidadPrograma').value = '';
    document.getElementById('fechaInicioPrograma').value = '';
}

let programas = [];

function guardar() {
    const programa = obtenerDatosFormulario();
    
    if (validarPrograma(programa)) {
        programas.push(programa);
        alert('Programa guardado exitosamente');
        limpiarFormulario();
        mostrarProgramas();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function actualizar() {
    const programa = obtenerDatosFormulario();
    
    if (validarPrograma(programa)) {
        const index = programas.findIndex(prog => prog.codigoPrograma === programa.codigoPrograma);
        
        if (index !== -1) {
            programas[index] = programa;
            alert('Programa actualizado correctamente');
            limpiarFormulario();
            mostrarProgramas();
        } else {
            alert('No se encontró un programa con ese código.');
        }
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function eliminar() {
    const codigoPrograma = document.getElementById('codigoPrograma').value.trim();
    
    if (codigoPrograma) {
        const index = programas.findIndex(prog => prog.codigoPrograma === codigoPrograma);
        
        if (index !== -1) {
            programas.splice(index, 1);
            alert('Programa eliminado correctamente');
            limpiarFormulario();
            mostrarProgramas();
        } else {
            alert('No se encontró un programa con ese código.');
        }
    } else {
        alert('Por favor, ingresa el código del programa.');
    }
}

function consultar() {
    const codigoPrograma = document.getElementById('codigoPrograma').value.trim();
    
    if (codigoPrograma) {
        const programa = programas.find(prog => prog.codigoPrograma === codigoPrograma);
        
        if (programa) {
            cargarFormulario(programa);
        } else {
            alert('No se encontró un programa con ese código.');
        }
    } else {
        alert('Por favor, ingresa el código del programa.');
    }
}

function mostrarProgramas() {
    console.clear();
    console.log('Lista de programas académicos:', programas);
}

