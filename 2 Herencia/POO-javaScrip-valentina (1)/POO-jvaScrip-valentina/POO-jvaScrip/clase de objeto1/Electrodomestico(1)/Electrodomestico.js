// Super clase
class Electrodomesticos {
    // constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo_electrico = parseInt(prompt("Consumo electrico:")); // Se usa prompt para pedir input
    }

    // método público
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELECTRODOMESTICO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Color: ", this.color, "<br>");
        document.write("Capacidad: ", this.capacidad, "<br>");
        document.write("Consumo electrico: ", this.consumo_electrico, "<br>");
    }
}

// Subclase Refrigerador
class Refrigerador extends Electrodomesticos {
    // constructor
    constructor(marca, color, capacidad,tipo_refrigerador) {
        super(marca, color, capacidad); // Hereda de Electrodomestico
        this.tipo_refrigerador= tipo_refrigerador;
        this.temperatura = parseInt(prompt("Temperatura de la nevera encendida:")); // Prompt para pedir input
    }

    // método para encender el carro
    ajustar_temperatura() {
        document.write("El refrigerador es de tipo: ", this.tipo_refrigerador, "<br>"); // Imprime las puertas del refrigerador

        if (this.temperatura < 7) {
            document.write("<hr>");
            document.write("<div class='alert alert-success' role='alert'>El refrigerador " + this.marca + ", tipo " + this.tipo_refrigerador + " de color " + this.color + " Funciona correctamente!!</div>");
        } else {
            document.write("<hr>");
            document.write("<div class='alert alert-danger' role='alert'>El refrigerador " + this.marca + ", tipo " + this.tipo_refrigerador + " de color " + this.color + " No funciona, llevelo a mantenimiento !!</div>");
        }
    }
}class Electrodomestico {
    //Constructor
    constructor(marca, color, capacidad) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.consumo_electrico = parseInt(prompt("Consumo eléctrico:")); 
    }
    
    //Método público
    registrar() { 
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELEMENTO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Color: ", this.color, "<br>");
        document.write("Capacidad: ", this.capacidad, "<br>"); 
        document.write("No. de consumo eléctrico: ", this.consumo_electrico, "<br>");
    }
}

// Subclase Refrigerador
class Refrigerador extends Electrodomestico {
    // Constructor de la subclase
    constructor(marca, color, capacidad, tipo_refrigerador) {
        // Llamada al constructor de la superclase
        super(marca, color, capacidad);
        this.tipo_refrigerador = tipo_refrigerador;
        this.temperatura = parseInt(prompt("Temperatura inicial en grados centígrados: "));
    }

    // Método para ajustar la temperatura
    ajustar_temperatura() {
        document.write("Tipo de refrigerador: ", this.tipo_refrigerador, "<br>");
        
        if (this.temperatura > 7) {
            document.write("<hr>"); 
            document.write(`<div class="alert alert-success" role="alert">El refrigerador ${this.marca}, de color ${this.color} y capacidad ${this.capacidad} tiene una temperatura normal</div>`); 
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El refrigerador ${this.marca}, de color ${this.color} y capacidad ${this.capacidad} tiene una temperatura anormal!</div>`); 
        }
    }
}

// Instanciando la subclase Refrigerador
let refrigerador = new Refrigerador('Redmi 12pro', 'Negro', '230 litros', 'ElP');
refrigerador.registrar();  // Registrando
refrigerador.ajustar_temperatura();  // Ajustando temperatura


// Instanciando la subclase Carro
let objeto_Refrigerador = new Refrigerador('Redmi 12pro', 'Negro', '230 litros','ElP') ; // Objeto refrigerador
objeto_Refrigerador.registrar(); // Registrando el refrigerador
objeto_Refrigerador.ajustar_temperatura(); // Encendiendo el refrigerador