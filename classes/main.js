"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductList_1 = require("./ProductList");
var PHONE_CATEGORY = "Phone";
var AIR_CONDITION_CATEGORY = "air-condition";
var productsList = new ProductList_1.ProductList();
var IphoneX = new Product_1.Product("Iphone X", 1000, 30, 2020, PHONE_CATEGORY);
var samsungS7 = new Product_1.Product("Samsung Galaxy S7", 800, 50, 2022, PHONE_CATEGORY);
var vinsmartPro = new Product_1.Product("Vinsmart Pro", 400, 200, 2019, PHONE_CATEGORY);
var daikinInverter = new Product_1.Product("Daikin Inverter", 700, 200, 2019, AIR_CONDITION_CATEGORY);
var panasonicInverter = new Product_1.Product("Panasonic Inverter", 500, 200, 2019, AIR_CONDITION_CATEGORY);
productsList.addProduct(IphoneX);
productsList.addProduct(samsungS7);
productsList.addProduct(vinsmartPro);
productsList.addProduct(daikinInverter);
productsList.addProduct(panasonicInverter);
// productsList.deleteProductByName("Iphone X")
// productsList.deleteProductByName("Samsung Galaxy S7")
// productsList.updatingProduct(101,panasonicInverter.name, 100,15,panasonicInverter.category)
productsList.findProductByName(panasonicInverter.name);
productsList.findProductById(102);
// console.table(productsList.productList);
