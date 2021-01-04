export class AppDocument {
    public location: string;
    public name: string;

    // Posible 
    public type?: string;
    public tags?: string[];
    public creationDate?: Date;
    public modificationDate?: Date;

    constructor() { }
}
