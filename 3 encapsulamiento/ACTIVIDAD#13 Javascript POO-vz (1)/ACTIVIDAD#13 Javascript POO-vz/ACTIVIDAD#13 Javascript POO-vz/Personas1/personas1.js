//Clase Personas con atributos encapsulados o privados
class Personas{
    //Metodo constructor
    constructor(nombres,apellidos,identidad,fechanacimiento,sexo){

        this._nombres = nombres //privado
        this._apellidos = apellidos //privado
        this._identidad = identidad //privado
        this.fechanacimiento = fechanacimiento //publico
        this.sexo = sexo //publico
    }
        
    //Metodo getter para nombres
    obtener_nombres(){
        return this._nombres;
    }
    
    //Metodo getter para apellidos
    obtener_apellidos(){
        return this._apellidos;
    }

    //Metodo getter para identidad
    obtener_identidad(){
        return this._identidad;
    }
    
    //Metodo setter para nombres
    establecer_nombres( nuevo_nombres){
        this._nombres = nuevo_nombres;
    }

    //Metodo setter para apellidos
    establecer_apellidos(nuevo_apellidos){
        this._apellidos = nuevo_apellidos;  
    }
        
        
    //Metodo mostrar detalles del objeto
    mostrar_detalles(){
        document.write(`\nNombres: ${this._nombres}<br> `);
        document.write(`Apellidos: ${this._apellidos}<br> `);
        document.write(`N° Identidad: ${this._identidad}<br> `);
        document.write(`Fecha nacimiento: ${this.fechanacimiento}<br> `);
        document.write(`Sexo: ${this.sexo}<br> `);
    }
}
    
//objeto
const persona = new Personas("Jorge","Rojas",1102345678,"14/09/2000","M");
    
    
//Imprimir atributos publicos y privados
persona.mostrar_detalles()
    
document.write("<hr>")
    
//Mostrar  atributo encapsulado usando setters y obtenerlos con getters
persona.establecer_nombres("Carlos"); //setter
document.write(`Nombres: ${persona.obtener_nombres()} <br>`); //getter
persona.establecer_apellidos("Perez"); //setter
document.write(`Apellidos: ${persona.obtener_apellidos()} <br>`); //getter
document.write(`N° Identidad: ${persona.obtener_identidad()} <br>`); //getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento} <br>`); //publico
prdocument.writeint(`Sexo: ${persona.sexo } <br>`); //publico

