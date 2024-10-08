// Super clase
class Instrumento {
    // constructor
    constructor(marca, material, tipo) {
        this.marca = marca;
        this.material = material;
        this.tipo= tipo;
        this.precio = parseInt(prompt("Ingrese el precio en pesos: ")); // Se usa prompt para pedir input
    }

    // método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMESTICO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("Tipo de guitarra: ", this.tipo, "<br>");
        document.write("Precio de guitarra: ", this.precio, "<br>");
    }
}

// Subclase Smartphone
class Guitarra extends Instrumento {
    // constructor
    constructor(marca, material, tipo, cuerdas) {
        super(marca, material, tipo); // Hereda de Instrumento
        this.cuerdas = cuerdas;
        this.acordes= parseInt(prompt("Ingrese cuantos acordes conoce:")); // Prompt para pedir input
    }

    // método para encender el carro
    ajustar_bateria() {
        document.write("numero de cuerdas: ", this.cuerdas, "<br>"); // Imprime las puertas del Smartphone

        if (this.acordes > 1) {
            document.write("<hr>");
            document.write("<div class='alert alert-success' role='alert'>La Guitarra " + this.marca + ", hecho de " + this.material + " tipo " + this.tipo + " Puede tocarla correctamente !!</div>");
        } else {
            document.write("<hr>");
            document.write("<div class='alert alert-danger' role='alert'>La Guitarra " + this.marca + ", hecho de " + this.marca + " tipo " + this.tipo + " No puede tocarla correctamente, practique mas !!</div>");
        }
    }
}

// Instanciando la subclase Carro
let objeto_Guitarra = new Guitarra('Yamaha', 'Madera', 'Clasica', '6 cuerdas')  ; // Objeto Guitarra
objeto_Guitarra.registrar(); // Registrando la Guitarra
objeto_Guitarra.ajustar_bateria(); // Encendiendo la Guitarra