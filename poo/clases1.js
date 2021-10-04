class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

}

class Aprendiz extends Persona {
    constructor(nombre, apellido, programa, ficha){
        super(nombre,apellido);
        this._programa=programa;
        this._ficha=ficha;
    }
    get programa() {
        return this._programa;
    }
    set programa(programa) {
        this._programa = programa;
    }
    get ficha() {
        return this._ficha;
    }
    set ficha(ficha) {
        this._ficha = ficha;
    }
}

ap=new Aprendiz('Juan','Bautista','ADSI','2142329');
console.log(ap);

var ob = new Persona('Sandra', 'Mora');
var ob2=new Persona();
ob2.nombre='Julio';
ob2.apellido='Iglesias';
console.log(ob2.nombre);
console.log(ob.nombre);
ob.nombre = 'Marcela';
console.log(ob.nombre);
console.log(ob.nombreCompleto());
//console.log(Math.abs(-5.3));