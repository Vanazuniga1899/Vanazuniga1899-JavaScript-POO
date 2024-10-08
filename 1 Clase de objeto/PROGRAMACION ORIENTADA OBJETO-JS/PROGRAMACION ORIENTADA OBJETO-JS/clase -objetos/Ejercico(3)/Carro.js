//Defino la clase
class Carro{
     //Metodo constructor
    constructor(marca,color,año,peso){
         this.marca=marca   //propiedades para la instalacia
         this.color=color
         this.año=año
         this.peso=peso
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Informacion del carro<h3><br>")
        document.write("Marca: " +this.marca+"<br>")
        document.write("Color: " +this.color+"<br>")
        document.write("Año: " +this.año+"<br>")
        document.write("Peso: " +this.peso+"<br>")
        document.write("<hr>")
    }

    encender_carro(){
            //Atributo primitivo solo para el metodo encender
            this.encender_carro =prompt("El carro ensendera? ");
           //Evaluar el carro
           if (this.encender_carro =="si"){
            document.write("El carro : " + this.marca + " Si  puede encender <br>");
            document.write("<hr>");
           }else{
            document.write("El carro  " + this.marca +" no se puede encender <br>");
            document.write("<hr>");
       }

    }
     
}
//Creacion de objetos por medio e instanciar la clase Carro
let objeto1 = new Carro("Toyota","Roja","Fj40-1977","1,600kg")
let objeto2 = new Carro("Lamborghini huracán","Verde","2014","1,422kg")
let objeto3 =new  Carro("sprint cherrolet","Azul","1989","685kg")

//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.encender_carro();
objeto2.mostrarDetalles()
objeto3.mostrarDetalles()
