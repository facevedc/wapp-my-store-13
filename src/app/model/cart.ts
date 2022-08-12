import { CartProduct } from "./cartProduct";

export class Cart {
    totalProductos: number;
    cartProductList: CartProduct[];
    descuento: number;
    totalMonto: number;

    constructor(cartProductList: CartProduct[] = [], descuento: number = 0, totalMonto: number = 0) {
        this.totalProductos = this.sumProducts(cartProductList);
        this.cartProductList = cartProductList;
        this.descuento = descuento;
        this.totalMonto = totalMonto;
    }

    private sumProducts(cartProductList: CartProduct[]): number {
        if(cartProductList.length > 0) {
            let total = 0;
            cartProductList.forEach(p => {
                total += p.cantidad;
            })
            return total;
        }
        return 0
    }
}