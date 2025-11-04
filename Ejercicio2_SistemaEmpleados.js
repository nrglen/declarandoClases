class Empleado {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    calcularSalario() {
        return this.salarioBase;
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
    calcularSalario() {
        return super.calcularSalario() + this.bonificacion;
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, edad, salarioBase,lenguaje) {   
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
}

let nadinson = new Empleado("Nadinson", 30, 3000000);
console.log(`Empleado: ${nadinson.nombre},Salario: ${nadinson.calcularSalario()}`);

let felipe = new Gerente("Felipe", 40, 5000000, 1500000);
console.log(`Gerente: ${felipe.nombre},Salario: ${felipe.calcularSalario()}`);  

let angela = new Desarrollador("Angela", 28, 4000000, "JavaScript");
console.log(`Desarrollador: ${angela.nombre},Salario: ${angela.calcularSalario()}`);

