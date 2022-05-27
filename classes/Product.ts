export class Product{
    name:string
    category: string = "Phone"
    price:number
    quality:number
    date:number
    description: string
    productID:number
    static Id:number = 100;

    constructor(name: string, price: number, quality: number, date: number, category?: string) {
        this.name = name;
        this.category = category
        this.price = price;
        this.quality = quality;
        this.date = date;
        this.description = ""
        this.productID =  Product.Id++ // tao ID cho sp
    }
}