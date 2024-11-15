function obtenerDatosFormulario() {
    return {
        id: document.getElementById('identificacion').value.trim(),
        nombre: document.getElementById('nombre').value.trim(),
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        correo: document.getElementById('correo').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
    };
}

function validarEstudiante(estudiante) {
    return (
        estudiante.id &&
        estudiante.nombre &&
        estudiante.fechaNacimiento &&
        estudiante.correo &&
        estudiante.telefono
    );
}

function cargarFormulario(estudiante) {
    document.getElementById('identificacion').value = estudiante.id;
    document.getElementById('nombre').value = estudiante.nombre;
    document.getElementById('fechaNacimiento').value = estudiante.fechaNacimiento;
    document.getElementById('correo').value = estudiante.correo;
    document.getElementById('telefono').value = estudiante.telefono;
}

function limpiarFormulario() {
    document.getElementById('identificacion').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
}

let estudiantes = [];

function guardar() {
    const estudiante = obtenerDatosFormulario();
    
    if (validarEstudiante(estudiante)) {
        estudiantes.push(estudiante);
        alert('Estudiante guardado exitosamente');
        limpiarFormulario();
        mostrarEstudiantes();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function actualizar() {
    const estudiante = obtenerDatosFormulario();
    
    if (validarEstudiante(estudiante)) {
        const index = estudiantes.findIndex(est => est.id === estudiante.id);
        
        if (index !== -1) {
            estudiantes[index] = estudiante;
            alert('Estudiante actualizado correctamente');
            limpiarFormulario();
            mostrarEstudiantes();
        } else {
            alert('No se encontró un estudiante con esa identificación.');
        }
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
}

function eliminar() {
    const id = document.getElementById('identificacion').value.trim();
    
    if (id) {
        const index = estudiantes.findIndex(est => est.id === id);
        
        if (index !== -1) {
            estudiantes.splice(index, 1);
            alert('Estudiante eliminado correctamente');
            limpiarFormulario();
            mostrarEstudiantes();
        } else {
            alert('No se encontró un estudiante con esa identificación.');
        }
    } else {
        alert('Por favor, ingresa la identificación del estudiante.');
    }
}

function consultar() {
    const id = document.getElementById('identificacion').value.trim();
    
    if (id) {
        const estudiante = estudiantes.find(est => est.id === id);
        
        if (estudiante) {
            cargarFormulario(estudiante);
        } else {
            alert('No se encontró un estudiante con esa identificación.');
        }
    } else {
        alert('Por favor, ingresa la identificación del estudiante.');
    }
}

function mostrarEstudiantes() {
    console.clear();
    console.log('Lista de estudiantes:', estudiantes);
}