//Clase producto con atributos encapsulados o privados
class Productos{
//Metodo constructor
constructor(nombre,precio,cantidad,categoria){
    this._nombre = nombre //privado
    this._precio = precio //privado
    this.cantidad = cantidad //publico
    this.categoria = categoria //publico
    
}


//Metodo getter para nombres
obtener_nombre(){
    return this._nombre;
}


//Metodo getter para precios
obtener_precio(){
    return this._precio;
}


//Metodo setter para nombres
establecer_nombre(nuevo_nombre){
    this._nombre = nuevo_nombre;

}

//Metodo setter para precios
establecer_precio( nuevo_precio){
    this._precio = nuevo_precio; 
}



//Metodo mostrar detalles del objeto
mostrar_detalles(){
    document.write(`\nNombre:  ${this._nombre}<br> `);
    document.write(`Precio:  ${this._precio} pesos <br> `);
    document.write(`Cantidad:  ${this.cantidad} <br> `);
    document.write(`Categoria:  ${this.categoria} <br> `);
    
    }

}
    
//objeto
const producto = new Productos("Redmi 12",1999900,"12","Xiaomi");
    
    
//Imprimir atributos publicos y privados
producto.mostrar_detalles()
    
document.write("<hr>")
    
//Mostrar  atributo encapsulado usando setters y obtenerlos con getters
producto.establecer_nombre("Redmi 13") //setter
document.write(`Nombre: ${producto.obtener_nombre()}<br> `); //getter
producto.establecer_precio("2.000.000"); //setter
document.write(`Precio: ${producto.obtener_precio()}<br> `); //getter
document.write(`Cantidad: ${producto.cantidad }<br> `);  //getter
document.write(`Categoria: ${producto.categoria }<br> `); //publico

