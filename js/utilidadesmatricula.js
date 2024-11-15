function obtenerDatosFormulario() {
    return {
        idMatricula: document.getElementById('idMatricula').value.trim(),
        idEstudiante: document.getElementById('idEstudiante').value.trim(),
        codigoPrograma: document.getElementById('codigoPrograma').value.trim(),
        fechaMatricula: document.getElementById('fechaMatricula').value,
        estadoMatricula: document.getElementById('estadoMatricula').value
    };
}

function validarMatricula(matricula) {
    return (
        matricula.idMatricula &&
        matricula.idEstudiante &&
        matricula.codigoPrograma &&
        matricula.fechaMatricula &&
        matricula.estadoMatricula
    );
}

function cargarFormulario(matricula) {
    document.getElementById('idMatricula').value = matricula.idMatricula;
    document.getElementById('idEstudiante').value = matricula.idEstudiante;
    document.getElementById('codigoPrograma').value = matricula.codigoPrograma;
    document.getElementById('fechaMatricula').value = matricula.fechaMatricula;
    document.getElementById('estadoMatricula').value = matricula.estadoMatricula;
}

function limpiarFormulario() {
    document.getElementById('idMatricula').value = '';
    document.getElementById('idEstudiante').value = '';
    document.getElementById('codigoPrograma').value = '';
    document.getElementById('fechaMatricula').value = '';
    document.getElementById('estadoMatricula').value = '';
}

let matriculas = [];

function guardar() {
    const matricula = obtenerDatosFormulario();
    
    if (validarMatricula(matricula)) {
        matriculas.push(matricula);
        alert('Matrícula guardada exitosamente');
        limpiarFormulario();
        mostrarMatrículas();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function actualizar() {
    const matricula = obtenerDatosFormulario();
    
    if (validarMatricula(matricula)) {
        const index = matriculas.findIndex(mat => mat.idMatricula === matricula.idMatricula);
        
        if (index !== -1) {
            matriculas[index] = matricula;
            alert('Matrícula actualizada correctamente');
            limpiarFormulario();
            mostrarMatrículas();
        } else {
            alert('No se encontró una matrícula con esa identificación.');
        }
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function eliminar() {
    const idMatricula = document.getElementById('idMatricula').value.trim();
    
    if (idMatricula) {
        const index = matriculas.findIndex(mat => mat.idMatricula === idMatricula);
        
        if (index !== -1) {
            matriculas.splice(index, 1);
            alert('Matrícula eliminada correctamente');
            limpiarFormulario();
            mostrarMatrículas();
        } else {
            alert('No se encontró una matrícula con esa identificación.');
        }
    } else {
        alert('Por favor, ingresa la identificación de la matrícula.');
    }
}

function consultar() {
    const idMatricula = document.getElementById('idMatricula').value.trim();
    
    if (idMatricula) {
        const matricula = matriculas.find(mat => mat.idMatricula === idMatricula);
        
        if (matricula) {
            cargarFormulario(matricula);
        } else {
            alert('No se encontró una matrícula con esa identificación.');
        }
    } else {
        alert('Por favor, ingresa la identificación de la matrícula.');
    }
}

function mostrarMatrículas() {
    console.clear();
    console.log('Lista de matrículas:', matriculas);
}


