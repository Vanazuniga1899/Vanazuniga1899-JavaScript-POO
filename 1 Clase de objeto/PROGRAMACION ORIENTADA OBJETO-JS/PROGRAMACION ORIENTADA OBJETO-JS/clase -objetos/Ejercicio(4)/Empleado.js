//Defino la clase
class Empleado{
     //Metodo constructor
    constructor(marca,color,año,peso){
         this.marca=marca   //propiedades para la instalacia
         this.color=color
         this.año=año
         this.peso=peso
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Informacion del Empleado<h3><br>")
        document.write("Marca: " +this.marca+"<br>")
        document.write("Color: " +this.color+"<br>")
        document.write("Año: " +this.año+"<br>")
        document.write("Peso: " +this.peso+"<br>")
        document.write("<hr>")
    }

    desempeño_empleado (){
            //Atributo primitivo solo para el metodo encender
            this.desempeño_empleado = prompt("El desempeño del empleado es bueno? sí o No? ");
           //Evaluar el Empleado
           if (this.desempeño_empleado){
            document.write("El Empleado : " + this.marca + "  tiene un buen desempeño <br>");
            document.write("<hr>");
           }else{
            document.write("El Empleado  " + this.marca +" no  tiene un buen desempeño <br>");
            document.write("<hr>");
       }

    }
     
}
//Creacion de objetos por medio e instanciar la clase Empleado
let objeto1 = new Empleado("Luis","28 años","Ingeniero s.","2.000.000","Moreno","Masculino")
let objeto2 = new Empleado("Danna","26 años","Secretaria","1.245.950","Blanca","Femenina")
let objeto3 = new Empleado("Sebastían","40 años","Administrador","2.000.500","Blanco","Masculino")


//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.desempeño_empleado ();
objeto2.mostrarDetalles()
objeto3.mostrarDetalles()
