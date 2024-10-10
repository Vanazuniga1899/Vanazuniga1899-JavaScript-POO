//Crea una clase abstracta TareaEmpleado con un método abstracto realizar_tarea(). 
//Implementa las clases Ingeniero y Doctor que heredan de TareaEmpleado e implementan el 
//método realizar_tarea() de manera específica según su especialidad.

// Clase abstracta TareaEmpleado
class TareaEmpleado {
    realizar_tarea() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

class Ingeniero extends TareaEmpleado {
    constructor(nombre, especialidad) { // Añadir especialidad como parámetro
        super();
        this.nombre = nombre;
        this.especialidad = especialidad; // Asignar especialidad correctamente
    }

    realizar_tarea() {
        return `${this.nombre} la ${this.especialidad}, está programando en estos momentos. `;
    }
}

class Doctor extends TareaEmpleado {
    constructor(nombre, especialidad) {
        super();
        this.nombre = nombre;
        this.especialidad = especialidad;
    }

    realizar_tarea() {
        return ` ${this.nombre} el  ${this.especialidad}, está atendiendo a un paciente en estos momentos.`;
    }
}

// Función para mostrar los resultados en el HTML
function mostrarResultado() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

    // Crear instancias de Ingeniero y Doctor
    const ingeniero = new Ingeniero("Diana", "Ingeniería de software");
    const doctor = new Doctor("Mateo", "Cirugía");

    // Mostrar los resultados en el contenedor output
    output.innerHTML += `<p>Tarea del ingeniero:  ${ingeniero.realizar_tarea()}</p>`;
    output.innerHTML += `<p>Tarea del doctor:   ${doctor.realizar_tarea()}</p>`;
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarResultado;
