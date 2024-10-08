// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Guitarra
class Guitarra {
    constructor(marca, color,material) {
        this.marca = marca
        this.color = color
        this.material = material
       
    }

    mostrarInfo() {
        output.innerHTML += "Hola, estas en la seccion de Guitarra<br>";
        output.innerHTML += `${this.marca} ${this.color}<br>`;
        output.innerHTML += `Material: ${this.material}<br>`;
        
    }
}

// Clase Piano
class Piano {
    constructor(marca, color,material) {
        this.marca = marca
        this.color = color
        this.material = material
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Piano <br>";
        output.innerHTML += `${this.marca} ${this.color}<br>`;
        output.innerHTML += `Material: ${this.material}<br>`;
        
    }
}

// Clase Trompeta
class Trompeta {
    constructor(marca, color,material) {
        this.marca = marca
        this.color = color
        this.material = material
       
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Trompeta<br>";
        output.innerHTML += `${this.marca} ${this.color}<br>`;
        output.innerHTML += `Material: ${this.material}<br>`;
        
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de cada clase
const objeto_guitarra = new  Guitarra("Fender", "amarillo", "abeto")
const objeto_piano = new  Piano("Steinway & Sons ", "Negro", "Madera")
const objeto_trompeta = new Trompeta("Yamaha", "Dorado", "Laton")


// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objeto_guitarra);
mostrarInformacion(objeto_piano);
mostrarInformacion(objeto_trompeta);