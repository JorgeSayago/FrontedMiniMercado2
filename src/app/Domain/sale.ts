export class Sale {
    sale_id: number = 0;
    numero_venta: string = "";
    fecha_venta: Date;
    cliente_id: string = "";
    total: number = 0;


    constructor(fecha_venta: Date = new Date()) {
        this.fecha_venta = fecha_venta;
    }
}