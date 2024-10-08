// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Carro
class Carro {
    constructor(modelo, color, año, cinturon_seguridad) {
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.cinturon_seguridad = cinturon_seguridad;
        this.formacion = prompt("Vehículo que desea encontrar: ");
        this.regional = prompt("Regional: ");
    }

    mostrarInfo() {
        output.innerHTML += "Hola, estas en la seccion de Carro <br>";
        output.innerHTML += `${this.modelo} ${this.color}<br>`;
        output.innerHTML += `Año: ${this.año}<br>`;
        output.innerHTML += `Objeto registrado: ${this.cinturon_seguridad}<br>`;
       
    }
}

// Clase Moto
class Moto {
    constructor(modelo, color, año, m_electrica) {
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.m_electrica = m_electrica;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Moto<br>";
        output.innerHTML += `${this.modelo} ${this.color}<br>`;
        output.innerHTML += `Año: ${this.año}<br>`;
        output.innerHTML += `Objeto registrado: ${this.m_electrica}<br><br>`;
    }
}

// Clase Bicicleta
class Bicicleta {
    constructor(modelo, color, año, pedales) {
        this.modelo = modelo;
        this.color = color;
        this.año = año;
        this.pedales = pedales;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Bicicleta <br>";
        output.innerHTML += `${this.modelo} ${this.color}<br>`;
        output.innerHTML += `Año: ${this.año}<br>`;
        output.innerHTML += `Objeto registrado: ${this.pedales}<br><br>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(vehiculo) {
    vehiculo.mostrarInfo();
}

// Instancias de cada clase
const objeto_carro = new Carro("Toyota", "Gris", 2018, "Cinturon de seguridad");
const objeto_moto = new Moto("Honda", "Roja", 2016, "Máxima velocidad");
const objeto_bicicleta = new Bicicleta("Bicicleta de ruta", "Negra", 2023, "Pedales modernos");

// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objeto_carro);
mostrarInformacion(objeto_moto);
mostrarInformacion(objeto_bicicleta);
