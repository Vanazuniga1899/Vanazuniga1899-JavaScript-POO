// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Perro
class Perro {
    constructor(especie, sexo, fecha_nacimiento,color) {
        this.especie = especie
        this.sexo = sexo
        this.fecha_nacimiento = fecha_nacimiento
        this.color = color
    }

    mostrarInfo() {
        output.innerHTML += "Hola, estas en la seccion de Perro<br>";
        output.innerHTML += `${this.especie} ${this.sexo}<br>`;
        output.innerHTML += `Años: ${this.fecha_nacimiento}<br>`;
        output.innerHTML += `color: ${this.color}<br>`;
    }
}

// Clase Gato
class Gato {
    constructor(especie, sexo, fecha_nacimiento,color) {
        this.especie = especie;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.color = color;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Gato <br>";
        output.innerHTML += `${this.especie} ${this.sexo}<br>`;
        output.innerHTML += `Años: ${this.fecha_nacimiento}<br>`;
        output.innerHTML += `Color: ${this.color}<br><br>`;
    }
}

// Clase Pajaro
class Pajaro {
    constructor(especie, sexo, fecha_nacimiento,color) {
        this.especie = especie;
        this.sexo = sexo;
        this.fecha_nacimiento = fecha_nacimiento;
        this.color = color;
    }

    mostrarInfo() {
        output.innerHTML += "<hr>";
        output.innerHTML += "Hola, estas en la seccion de Pajaro<br>";
        output.innerHTML += `${this.especie} ${this.sexo}<br>`;
        output.innerHTML += `Años: ${this.fecha_nacimiento}<br>`;
        output.innerHTML += `color: ${this.color}<br><br>`;
    }
}

// Función que muestra la información de cualquier tipo de objeto
function mostrarInformacion(persona) {
    persona.mostrarInfo();
}

// Instancias de cada clase
const objeto_perro = new Perro("Dalmata", "M", 6, "Gris",)
const objeto_gato = new Gato("Egipcio", "H", 2, "piel",)
const objeto_pajaro = new Pajaro("Picaflor", "M", 3, "arcoiris")


// Llamado al método mostrarInfo para cada objeto
mostrarInformacion(objeto_perro);
mostrarInformacion(objeto_gato);
mostrarInformacion(objeto_pajaro);