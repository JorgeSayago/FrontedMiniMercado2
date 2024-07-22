export class Promotion {
    promotion_id: number =0;
    nombre: string ="";
    descripcion: string = "";
    fechaInicio: Date;
    fechaFin: Date;

    constructor(nombre: string = "" , descripcion: string = "", fechaInicio: Date = new Date(), fechaFin: Date = new Date()) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
