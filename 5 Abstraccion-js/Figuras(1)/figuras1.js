//Define una clase abstracta FormaGeometrica con un método abstracto calcular_area().
//Crea dos clases concretas: Cuadrado y Circulo que heredan de FormaGeometrica 
//y cada una debe implementar su propia versión de calcular_area()//



// Clase abstracta FormaGeometrica
class FormaGeometrica {
    // Método abstracto que será implementado por las subclases
    calcular_area() {
        throw new Error("Este método debe ser implementado por una subclase");
    }
}

// Clase Cuadrado que hereda de FormaGeometrica
class Cuadrado extends FormaGeometrica {
    // Constructor para definir el lado del cuadrado
    constructor(lado) {
        super();
        this.lado = lado;
    }

    // Implementación del cálculo del área para un cuadrado
    calcular_area() {
        return this.lado * this.lado;
    }
}

// Clase Circulo que hereda de FormaGeometrica
class Circulo extends FormaGeometrica {
    // Constructor para definir el radio del círculo
    constructor(radio) {
        super();
        this.radio = radio;
    }

    // Implementación del cálculo del área para un círculo
    calcular_area() {
        return Math.PI * (this.radio * this.radio);
    }
}

// Función para mostrar el resultado en el HTML
function mostrarResultado() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Limpiar el contenido anterior

    // Crear instancias de Cuadrado y Circulo
    const cuadrado = new Cuadrado(5);
    const circulo = new Circulo(3);

    // Mostrar los resultados en el contenedor output
    output.innerHTML += `<p>Área del cuadrado: ${cuadrado.calcular_area().toFixed(2)}</p>`;
    output.innerHTML += `<p>Área del círculo: ${circulo.calcular_area().toFixed(2)}</p>`;
}

// Ejecutar la función cuando se cargue la página
window.onload = mostrarResultado;