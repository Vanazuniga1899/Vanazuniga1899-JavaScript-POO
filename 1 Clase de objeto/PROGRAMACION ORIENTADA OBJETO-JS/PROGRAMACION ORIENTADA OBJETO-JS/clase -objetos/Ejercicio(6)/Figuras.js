// Defino la clase
class Figuras_G {
     // Método constructor
     constructor(nombre, lados, color, area, perimetro) {
         this.nombre = nombre;
         this.lados = lados;   // Propiedades para la instancia
         this.color = color;
         this.area = area;
         this.perimetro = perimetro;
     }
 
     // Método para mostrar detalles del objeto
     mostrarDetalles() {
         // Usando consola para evitar problemas con document.write
         document.write("<h3>Figuras geométricas<h3><br>")
         document.write("Nombre: " + this.nombre +"<br>");
         document.write("Lados: " + this.lados +"<br>");
         document.write("Color: " + this.color +"<br>");
         document.write("Área: " + this.area +"<br>");
         document.write("Perímetro: " + this.perimetro +"<br>");
         document.write("<hr>");
     }
}
       

 // Creación de objetos por medio de instanciar la clase Figuras_G
 let objeto1 = new Figuras_G("Pentágono", 5, "Amarillo", "43.01cm²", "25cm");
 let objeto2 = new Figuras_G("Círculo", 0, "Rojo", "78.54cm²", "31.42cm");
 let objeto3 = new Figuras_G("Triángulo", 3, "Azul", "10cm²", "12cm");
 
 // Mostrar los detalles de cada objeto
 objeto1.mostrarDetalles();
 objeto2.mostrarDetalles();
 objeto3.mostrarDetalles();
 
 
