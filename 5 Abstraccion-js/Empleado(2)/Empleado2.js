//Crea una clase abstracta Empleado con un método abstracto calcular_salario().
//Luego, crea dos clases concretas EmpleadoTiempoCompleto y EmpleadoPorHoras
//que implementen calcular_salario() de manera distinta.

// Clase abstracta Empleado
class Empleado {
    calcular_salario() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, horas_de_trabajo, salario_hora) {
        super();
        this.nombre = nombre;
        this.horas_de_trabajo = horas_de_trabajo;
        this.salario_hora = salario_hora;
    }

    calcular_salario() {
        return this.horas_de_trabajo * this.salario_hora;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre, horas_de_trabajo, salario_hora) {
        super();
        this.nombre = nombre;
        this.horas_de_trabajo = horas_de_trabajo;
        this.salario_hora = salario_hora;
    }

    calcular_salario() {
        return this.horas_de_trabajo * this.salario_hora;
    }
}

// Función para mostrar los resultados en el HTML
function mostrarResultado() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

  // Crear instancias de empleados
  const empleado_completo = new EmpleadoTiempoCompleto("Juan carlos", 300, 50);
  const empleado_por_horas = new EmpleadoPorHoras("Luis", 20, 100);

  // Mostrar los resultados en el contenedor output
  output.innerHTML += `<p>El salario total de ${empleado_completo.nombre} es de: ${empleado_completo.calcular_salario()}</p>`;
  output.innerHTML += `<p>A diferencia del salario total de ${empleado_por_horas.nombre}, es de: ${empleado_por_horas.calcular_salario()}</p>`;
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarResultado;