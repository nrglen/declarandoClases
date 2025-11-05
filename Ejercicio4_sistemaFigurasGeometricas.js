// Crea un sistema de figuras geometricas

class Figura{
    constructor(color) {
        this.color = color;
    }
    area(){
        return 0;
    }
    descripcion(){
        return `Figura de color: ${this.color}`;
    }
}

class Rectangulo extends Figura{
    constructor(color, base,altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base * this.altura; 
    }
    descripcion(){
        return `Rectangulo de color: ${this.color}, Area: ${this.area()}`;
    }
    
}

class Circulo extends Figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;

    }
    area(){
        return (Math.PI.toFixed(2))*this.radio**2;
    }
    descripcion(){
        return `Circulo de color: ${this.color}, Area: ${this.area()}`;
    }
}

let circulo1 = new Circulo("Rojo", 5);
console.log(circulo1.descripcion());

let rectangulo1 = new Rectangulo("Azul", 4, 6);
console.log(rectangulo1.descripcion());