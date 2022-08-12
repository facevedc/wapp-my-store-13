export class CartProduct {
    idProducto: string
    nombre: string
    cantidad: number
    precio: number
    imagenPrincipal: string
    promocionPrecio: number
    totalPrecio: number

    constructor(idProducto: string = '', nombre: string = '', cantidad:number = 0, precio: number = 0, 
                        imagenPrincipal: string = '', promocionPrecio: number = 0, totalPrecio: number = 0) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagenPrincipal = imagenPrincipal;
        this.promocionPrecio = promocionPrecio;
        this.totalPrecio = totalPrecio;
    }
}