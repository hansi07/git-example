//Programacion orientada a objetos
//Clase Persona tiene un Constructor

let Person = function(name, lastname) {
    this.name = name;
    this.lastname = lastname;
//Metodo getters 
this.getName = function() {
    return this.name;
}
this.getLastname = function () {
    return this.lastname;
}
this.getCompletName = function () {
    return `${this.name} ${this.lastname}`;
}
//setters
this.setName = function (name) {
    this.name = name;
}
this.setLastname = function (lastname) {
    this.lastname = lastname;
}

};
//Objeto objetoPersona
let objectPerson = new Person('Juana', 'Gómez');

//Atributo
const objectPersonLiteral = {
    name: 'Juana',
    lastname: 'Gómez',

    getName: function () {
        return this.name;
    },
    getLastname: function () {
        return this.lastname;
    },
    getCompletName: function () {
        return `${this.name} ${this.lastname}`;
    },
    setName: function (name) {
        this.name = name;
    },
    setLastname: function (lastname) {
        this.lastname = lastname;
    },

};

console.log(objectPersonLiteral.name);
console.log(objectPersonLiteral.getName());

const keys = Object.keys(objectPersonLiteral);
console.log(keys);

const values = Object.values(objectPersonLiteral);
console.log(values);

//Object assign
const destino = {n1 : 1, n2 : 2, }