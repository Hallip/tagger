import { Tag } from "./Tag";

export class AppDocument {
    public location: string;
    public name: string;

    // Posible 
    public type?: string;
    public tags?: Tag[];
    public creationDate?: Date;
    public modificationDate?: Date;

    constructor() { }
}
