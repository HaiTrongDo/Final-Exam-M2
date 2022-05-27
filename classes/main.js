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
// hiên thị tất cả sp
// console.table(productsList.productList);
// hiển thị bảng, chỉ hiện thỉ những thông tin cần theo yêu cầu đề bài
// productsList.showAllProductTableInConsole()
// xóa sp theo tên
// productsList.deleteProductByName(IphoneX.name) // xóa sp theo tên
// productsList.deleteProductByName(samsungS7.name) // xóa sp theo tên
// productsList.deleteProductByName(vinsmartPro.name) // xóa sp theo tên
// productsList.deleteProductByName(daikinInverter.name) // xóa sp theo tên
// productsList.deleteProductByName(panasonicInverter.name) // xóa sp theo tên
// xóa sp theo Id
// productsList.deleteProductById(100)
// productsList.deleteProductById(101)
// productsList.deleteProductById(102)
// productsList.deleteProductById(103)
// productsList.deleteProductById(104)
//update product
// productsList.updatingProduct(101,panasonicInverter.name, 100,15,panasonicInverter.category)
// tìm kiếm sp theo tên
// productsList.findProductByName(IphoneX.name)
// productsList.findProductByName(samsungS7.name)
// productsList.findProductByName(vinsmartPro.name)
// productsList.findProductByName(daikinInverter.name)
// productsList.findProductByName(panasonicInverter.name)
// tìm kiếm sp theo ID
// productsList.findProductById(100)
// productsList.findProductById(101)
// productsList.findProductById(102)
// productsList.findProductById(103)
// productsList.findProductById(104)
