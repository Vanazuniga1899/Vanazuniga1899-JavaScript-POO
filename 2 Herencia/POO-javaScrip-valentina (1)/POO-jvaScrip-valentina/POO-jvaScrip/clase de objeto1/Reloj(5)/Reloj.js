// Super clase
class Reloj {
    // constructor
    constructor(marca, material) {
        this.marca = marca;
        this.material = material;
        this.precio_deReloj = parseInt(prompt(" Precio del reloj: ")); // Se usa prompt para pedir input
    }

    //Método público
    registrar() { 
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>ELEMENTO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: ", this.marca, "<br>");
        document.write("Material: ", this.material, "<br>");
        document.write("No. Precio del reloj: ", this.precio_deReloj, "<br>");
    }
}

// Subclase reloj inteligente
class Reloj_Inteligente extends Reloj {
    // Constructor de la subclase
    constructor(marca, material, tipo_dePantalla) {
        // Llamada al constructor de la superclase
        super(marca, material);
        this.tipo_dePantalla = tipo_dePantalla;
        this.sistema_operativo = parseInt(prompt("Sistema operativo: "));
    }

    // Método para ajustar la temperatura
    encender_reloj() {
        document.write("Tipo de pantalla: ", this.tipo_dePantalla, "<br>");
        
        if (this.sistema_operativo > 10) {
            document.write("<hr>"); 
            document.write(`<div class="alert alert-success" role="alert">El reloj ${this.marca}, con material ${this.material}  tiene una temperatura normal</div>`); 
        } else {
            document.write("<hr>");
            document.write(`<div class="alert alert-danger" role="alert">El reloj ${this.marca}, con material ${this.material}  tiene una temperatura anormal!</div>`); 
        }
    }
}

// Instanciando la subclase Carro
let Objeto_Reloj = new Reloj_Inteligente('Apple', 'Aluminio', 'OLED')  ; // Objeto Guitarra
Objeto_Reloj .registrar(); // Registrando la Guitarra
Objeto_Reloj .encender_reloj(); // Encendiendo la Guitarra