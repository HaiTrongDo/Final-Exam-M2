import {Product} from "./Product";
import {ProductList} from "./ProductList";

const PHONE_CATEGORY = "Phone"
const AIR_CONDITION_CATEGORY = "air-condition"


let productsList = new ProductList()
let IphoneX = new Product("Iphone X", 1000, 30, 2020, PHONE_CATEGORY)
let samsungS7 = new Product("Samsung Galaxy S7", 800, 50, 2022, PHONE_CATEGORY)
let vinsmartPro = new Product("Vinsmart Pro", 400, 200, 2019, PHONE_CATEGORY)
let daikinInverter = new Product("Daikin Inverter", 700, 200, 2019,AIR_CONDITION_CATEGORY)
let panasonicInverter = new Product("Panasonic Inverter", 500, 200, 2019, AIR_CONDITION_CATEGORY)

productsList.addProduct(IphoneX)
productsList.addProduct(samsungS7)
productsList.addProduct(vinsmartPro)
productsList.addProduct(daikinInverter)
productsList.addProduct(panasonicInverter)

// productsList.deleteProductByName("Iphone X")
// productsList.deleteProductByName("Samsung Galaxy S7")

// productsList.updatingProduct(101,panasonicInverter.name, 100,15,panasonicInverter.category)
productsList.findProductByName(panasonicInverter.name)
productsList.findProductById(102)
// console.table(productsList.productList);