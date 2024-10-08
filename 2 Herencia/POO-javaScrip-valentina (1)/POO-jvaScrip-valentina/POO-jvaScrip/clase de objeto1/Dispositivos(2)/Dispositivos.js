// Super clase
class Dispositivos {
    // constructor
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.bateria = parseInt(prompt("Capacidad de bateria:")); // Se usa prompt para pedir input
    }

    // método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMESTICO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Modelo: ", this.modelo, "<br>");
        document.write("Año: ", this.año, "<br>");
        document.write("Bateria: ", this.bateria, "<br>");
    }
}

// Subclase Smartphone
class Smartphone extends Dispositivos {
    // constructor
    constructor(marca, modelo, año,sistema_operativo) {
        super(marca, modelo, año); // Hereda de Dispositivos
        this.sistema_operativo= sistema_operativo;
        this.nivel_bateria = parseInt(prompt("Indique el nivel de bateria del celular:")); // Prompt para pedir input
    }

    // método para encender el carro
    ajustar_bateria() {
        document.write("La sistema_operativo de su celular es: ", this.sistema_operativo, "<br>"); // Imprime las puertas del Smartphone

        if (this.nivel_bateria < 0) {
            document.write("<hr>");
            document.write("<div class='alert alert-success' role='alert'>El Smartphone " + this.marca + ", sistema operativo " + this.sistema_operativo + " modelo " + this.modelo + " Enciende !!</div>");
        } else {
            document.write("<hr>");
            document.write("<div class='alert alert-danger' role='alert'>El Smartphone " + this.marca + ", sistema operativo " + this.sistema_operativo + " modelo " + this.modelo + " No enciende, conectelo !!</div>");
        }
    }
}

// Instanciando la subclase Carro
let objeto_Refrigerador = new Smartphone('Samsung', 'Galaxy S21', '2021','Androd 11 de fabrica')  ; // Objeto Smartphone
objeto_Refrigerador.registrar(); // Registrando el Smartphone
objeto_Refrigerador.ajustar_bateria(); // Encendiendo el Smartphone