//Defino la clase
class Moto{
     //Metodo constructor
    constructor(marca,color,año,peso){
         this.marca=marca   //propiedades para la instalacia
         this.color=color
         this.año=año
         this.peso=peso
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Informacion de la  moto<h3><br>")
        document.write("Marca: " +this.marca+"<br>")
        document.write("Color: " +this.color+"<br>")
        document.write("Año: " +this.año+"<br>")
        document.write("Peso: " +this.peso+"<br>")
        document.write("<hr>")
    }

    encender_moto(){
            //Atributo primitivo solo para el metodo encender
            this.encender_moto =prompt("la moto ensendera? ");
           //Evaluar la moto
           if (this.encender_moto =="si"){
            document.write("la moto : " + this.marca + " Si  puede encender <br>");
            document.write("<hr>");
           }else{
            document.write("la moto  " + this.marca +" no puede encender <br>");
            document.write("<hr>");
       }

    }
     
}
//Creacion de objetos por medio e instanciar la clase Moto
let objeto1 = new Moto("Suzuki","Negra","2018","155kg")
let objeto2 = new Moto("Kymco","Verde","2007","115kg")
let objeto3 = new Moto("Hero","Negra","2016","160kg")

//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.encender_moto();
objeto2.mostrarDetalles()
objeto3.mostrarDetalles()
