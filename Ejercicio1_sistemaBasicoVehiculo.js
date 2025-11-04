class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;

    }
    ObtenerDetalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }

}

class moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.tipo = cilindrada;

    }
    ObtenerDetalles() {
        return `${super.ObtenerDetalles()}, Cilindrada: ${this.cinlindrada}`;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;

    }
    ObtenerDetalles() {
        return `${super.ObtenerDetalles()}, numeroPuertas: ${this.numeroPuertas}`;
    }
}



miVehiculo = new Vehiculo("Chevrolet", "Camaro", 2020);
console.log(miVehiculo.ObtenerDetalles());

miMoto = new moto("Yamaha", "YZF-R3", 2021, "321cc");
console.log(miMoto.ObtenerDetalles()); 

miCoche = new Coche("BMW", "Serie 3", 2019, 4);
console.log(miCoche.ObtenerDetalles());