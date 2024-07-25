export class Order {
    order_id: number = 0;
    proveedorid: number = 0;
    fechaPedido: Date;
    fechaEntrega: Date;
    product_id: number = 0;

    constructor(fechaPedido: Date = new Date(), fechaEntrega: Date = new Date()) {
        this.fechaPedido = fechaPedido;
        this.fechaEntrega = fechaEntrega;
    }
}