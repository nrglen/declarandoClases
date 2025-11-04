// Modela un sistema de productos electronicos 
class Producto{
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Marca: ${this.marca}`;
    }
}

class Telefono extends Producto{
    constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcino(){
        return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}, RAM: ${this.ram}`;
    }
}

class Laptop extends Producto{
    constructor(nombre, precio, marca, procesador, pulgadas){
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcino(){
        return `${super.descripcion()}, procesador: ${this.procesador}, RAM: ${this.pulgadas}`;
    }
}

let producto1 = new Producto("Audifonos", 150000, "Sony");
console.log(producto1.descripcion());

let telefono1 = new Telefono("iPhone 13", 3500000, "Apple", "128GB", "4GB");
console.log(telefono1.descripcino());

let laptop1 = new Laptop("Dell XPS 13", 5000000, "Dell", "Intel i7", "13.3");
console.log(laptop1.descripcino());
