class Persona{    
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get apellido(){
        return this._apellido;
    }
 nombreCompleto(){
return this._nombre+' '+this._apellido;
 }  
}

class Aprendiz extends Persona{
    constructor(nombre,apellido,programa, ficha){
        super(nombre,apellido);
        this._programa=programa;
        this._ficha=ficha;
    }
    set programa(programa){
        this._programa=programa;
    }
    get programa(){
        return this._programa;
    }

    set ficha(ficha){
        this._ficha=ficha;
    }
    get ficha(){
        return this._ficha;
    }
}

class Ficha{
    constructor(grupo){
        this._grupo=grupo;
    }
}
var ap1=new Aprendiz();
var ap2=new Aprendiz(); 
var migrupo=[];
migrupo.push(ap1);
migrupo.push(ap2);
mificha=new Ficha(migrupo);


var ap=new Aprendiz('Laura','Tellez','Contabilidad','2142330');
console.log(ap);


var obj=new Persona('Julio','Correal');
console.log(obj.nombre);
//obj.setNombre('nuevo');// así se hacía antes
obj.nombre='Roberto';
console.log(obj.nombre);
console.log(obj.nombreCompleto());