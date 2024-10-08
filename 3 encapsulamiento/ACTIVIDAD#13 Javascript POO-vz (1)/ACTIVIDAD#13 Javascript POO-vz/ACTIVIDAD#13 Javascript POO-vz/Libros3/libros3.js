//Clase libros con atributos encapsulados o privados
class Libros{
    //Metodo constructor
    constructor(titulo,autor,isbn,editorial){
        this._titulo = titulo //privado
        this._autor = autor //privado
        this._isbn = isbn //privado
        this.editorial = editorial  //publico
    }

    //Metodo getter para titulo
    obtener_titulo(){
        return this._titulo;
    }

    //Metodo getter para autor
    obtener_autor(){
        return this._autor;
    }


    //Metodo getter para isbn
    obtener_isbn(){
        return this._isbn;
    }

    //Metodo setter para titulo
    establecer_titulo(nuevo_titulo){
        this._titulo = nuevo_titulo;
    }
    
    //Metodo setter para autor
    establecer_autor( nuevo_autor){
        this._autor = nuevo_autor;
    }

    //Metodo setter para isbn
    establecer_isbn( nuevo_isbn){
        this._isbn = nuevo_isbn; 
    }
    
    
 //Metodo mostrar detalles del objeto
    mostrar_detalles(){
        document.write(`Titulo:  ${this._titulo}<br> `)
        document.write(`Autor: ${this._autor}<br> `)
        document.write(`Isbn: ${this._isbn}<br> `)
        document.write(`Editorial: ${this.editorial}<br> `)
    }

}

//objeto
const libro = new Libros("El principito","Antoine de Saint",4,"Gran Travesía")
    
    
//Imprimir atributos publicos y privados
libro.mostrar_detalles()

document.write("<hr>") 


//Mostrar  atributo encapsulado usando setters y obtenerlos con getters
libro.establecer_titulo("El viejo y el mar"); //setter
  document.write(`Nombres:  ${libro.obtener_titulo()} <br> `); //getter
libro.establecer_autor("Hemingway, Ernest") //setter
document.write(`Autor:  ${libro.obtener_autor()} <br> `); //getter
libro.establecer_isbn("3") //setter
document.write(`Isbn:  ${libro.obtener_isbn()} <br> `); //getter
document.write(`Editorial:  ${libro.editorial} <br> `); //publico




