//Defino la clase
class Celular{
     //Metodo constructor
    constructor(nombre, marca,imei, bateria, camara){
        this.nombre=nombre //propiedades para la instalacia
        this.marca=marca 
        this.imei=imei
        this.bateria=bateria
        this.camara=camara
    }

    //Metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Dispositivo movil<h3><br>")
        document.write("Nombre: " +this.nombre+"<br>")
        document.write("Marca: " +this.marca+"<br>")
        document.write("Imei: " +this.imei+"<br>")
        document.write("Bateria: " +this.bateria+"<br>")
        document.write("Camara: " +this.camara+"<br>")
        document.write("<hr>")
    }
    //Metodos para encender el celular
    encender(){
        //Atributo primitivo solo para el metodo encender
       let energia = parseInt(prompt("Digite el valor de dla carga: "));
       //Evaluar si tiene carga el celular
       if (energia > 0){
        document.write("El celular : " + this.nombre + " Se puede encender <br>");
        document.write(`||||||||| ${energia}% de carga <br>`);
        document.write("<hr>");
       }else{
        document.write("El celular  " + this.nombre +" no se puede encender <br>");
        document.write(`||||||||| ${energia}% de carga <br>`);
        document.write("<hr>");
       }

    }
     
}
//Creacion de objetos por medio e instanciar la clase Celular
let objeto1 =new Celular("Samsung","Galaxy s24",12861122,"4000mAh","108mpx")
let objeto2 =new Celular("Xiaomi","Mi 12",12361122,"5600mAh","108mpx")
let objeto3 = new Celular("iphone 13","Apple",2561122,"5600mAh","108mpx")

//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.encender();
objeto2.mostrarDetalles()
objeto3.mostrarDetalles()
