//Defino la clase
class Animal{
    //Metodo constructor
   constructor(nombre,raza, habitad,color, edad,peso){
       this.nombre=nombre //propiedades para la instalacia
       this.raza=raza
       this.habitad=habitad
       this.color=color
       this.edad=edad 
       this.peso=peso
   }

   //Metodo para mostrar detalles del objeto
   mostrarDetalles(){
       document.write("<h3>Informacion del Animal<h3><br>")
       document.write("Nombre: " +this.nombre+"<br>")
       document.write("Raza: " +this.raza+"<br>")
       document.write("Habitad: " +this.habitad+"<br>")
       document.write("Color: " +this.color+"<br>")
       document.write("Edad: " +this.edad+"<br>")
       document.write("Peso: " +this.peso+"<br>")
       document.write("<hr>")
   }
   edad_Animal(){
    //Atributo primitivo solo para el metodo encender
   let edad = parseInt(prompt("Digite la edad animal: "));
   //Evaluar la edad del animal
   if (edad > 8){
    document.write("El animal : "  + this.nombre + " es mayor  <br>");
    document.write("<hr>");
   }else{
    document.write("El animal  " + this.nombre +" no es mayor <br>");
    document.write("<hr>");
   }

}
    
}
//Creacion de objetos por medio e instanciar la clase animal
let objeto1 = new Animal("Luis","Pez","Oceano Atlantico","Amarillo","2 años","1,6kg")
let objeto2 = new Animal("Anderson","Cangrejo ermitaño","Mares y rios","Rojo","7 años","1,kg")
let objeto3 = new Animal("tiburoncín","Tiburon brilloso","Oceano Atlantico","Azul","3 años","2kg")

//Mostrar los detalles de cada objeto
objeto1.mostrarDetalles()
objeto1.edad_Animal(); //Método que evaluar la edad del Animal
objeto2.mostrarDetalles()
objeto3.mostrarDetalles()
