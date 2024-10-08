class Electronico {
    //Constructor
    constructor(marca, color, tipo_procesador) {
        this.marca = marca;
        this.color = color;
        this.tipo_procesador = tipo_procesador;
        this.memoria_RAM = parseInt(prompt("Memoria RAM:"));

    }
    
    //Método público
    registrar() { 
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELEMENTO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Color: ", this.color, "<br>");
        document.write("Tipo de procesdor: ", this.tipo_procesador, "<br>"); 
        document.write("No. de memoria RAM:", this.memoria_RAM, "<br>");
    }
}

// Subclase Laptop
class Laptop extends Electronico {
    // Constructor de la subclase
    constructor(marca, color, tipo_procesador, tipo_discoDuro) {
        // Llamada al constructor de la superclase
        super(marca, color, tipo_procesador);
        this.tipo_discoDuro = tipo_discoDuro;
        this.duracion_deBateria = parseInt(prompt(" Duracion de la bateria del dispositivo: "));
    }

    // Método para ajustar la temperatura
    encender_laptop() {
        document.write("Tipo de disco duro: ", this.tipo_discoDuro, "<br>");
        
        if (this.duracion_deBateria  > 100) {
            document.write("<hr>"); 
            document.write(`<div class="alert alert-success" role="alert">La laptop ${this.marca}, de color ${this.color} y procesador ${this.tipo_procesador} enciende de manera normal! </div>`); 
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">La laptop ${this.marca}, de color ${this.color} y procesador ${this.tipo_procesador}  no enciende!! </div>`); 
        }
    }
}

// Instanciando la subclase Laptop
let objeto_Laptop = new Laptop(' Lenovo', 'Rosa', 'MD Ryzen 5 3500U', '8 GB');
objeto_Laptop.registrar();  // Registrando
objeto_Laptop.encender_laptop()  //Encender laptop 
