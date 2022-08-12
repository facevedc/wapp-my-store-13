export interface Product {
    idProducto: string
    nombre: string
    descripcion: string
    categoria: string
    precio: number
    imagenPrincipal: string
    stock: number
    vendidos: number
    promocion: boolean
    promocionPrecio: number
}