// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Medico
class Medico {
    constructor(nombres, apellidos, cedula, especialidad) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.especialidad = especialidad;
    }

    mostrarInfo() {
        output.innerHTML += "Hola, soy un Medico<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Especialidad: ${this.especialidad}<br>`;
      
    }
}

// Clase Ingeniero
class Ingeniero {
    constructor(nombres, apellidos, cedula, campo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.campo = campo;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, soy una Ingeniera<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Área: ${this.campo}<br><br>`;
    }
}

// Clase Docente
class Docente {
    constructor(nombres, apellidos, cedula, asignatura) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.asignatura = asignatura;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, soy un Docente<br>";
        output.innerHTML += `${this.nombres} ${this.apellidos}<br>`;
        output.innerHTML += `CC: ${this.cedula}<br>`;
        output.innerHTML += `Asignatura: ${this.asignatura}<br>`;

    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de cada clase
const objeto_medico = new Medico("Andrés", "Pérez", 11223344, "Cardiologo")
const objeto_ingeniero = new  Ingeniero("Lucía", "Gómez", 22334455, "Ingeniería Civil")
const objeto_docente = new Docente("Juan", "Ramírez", 33445566, "Matemáticas")

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objeto_medico);
mostrarInformacion(objeto_ingeniero);
mostrarInformacion(objeto_docente);