import {Product} from "./Product.js";

export class ProductList {
    productList: Product[]

    constructor() {
        this.productList = []
    }

    addProduct(product: Product): void {
        this.productList.push(product)
    }

    updateProduct() {
    }

    deleteProductByName(product:string):void {
        let currentProduct;
        let dataList = this.productList;
        this.productList = dataList.filter(element => {
            return (product !== element.name)
        });
    }

    showAllProductTableInConsole(){
        let data = this.productList;
        let showingData = []
        for (let i = 0; i < data.length; i++) {
            let obj = {ID:data[i].productID,
                        Name:data[i].name,
                        Price: data[i].price,
                        Catergory:data[i].category}
            showingData.push(obj)
        }
        console.table(showingData)
    }

    updatingProduct(id:number, newName: string, newPrice: number, newQuality: number, newCategory: string){
        let data:Product[] = this.productList
        for (let i = 0; i < data.length; i++) {
            if(id === data[i].productID){
                data[i].name = newName
                data[i].price = newPrice
                data[i].quality = newQuality
                data[i].category = newCategory
                break;
            }
        }
    }

    findProductByName(findName:string){
        let data = this.productList;
        let newData = data.filter(element =>{
            return (element.name === findName)
        })
        this.showTableInConsole(newData)
    }

    findProductById(findID:number){
        let data = this.productList;
        let newData = data.filter(element =>{
            return (element.productID === findID)
        })
        this.showTableInConsole(newData)
    }

    showTableInConsole(data){
        let showingData = []
        for (let i = 0; i < data.length; i++) {
            let obj = {ID:data[i].productID,
                Name:data[i].name,
                Price: data[i].price,
                Catergory:data[i].category}
            showingData.push(obj)
        }
        console.table(showingData)
    }

}