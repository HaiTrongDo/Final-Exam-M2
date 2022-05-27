"use strict";
exports.__esModule = true;
exports.ProductList = void 0;
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.productList = [];
    }
    ProductList.prototype.addProduct = function (product) {
        this.productList.push(product);
    };
    ProductList.prototype.updateProduct = function () {
    };
    ProductList.prototype.deleteProductByName = function (product) {
        var currentProduct;
        var dataList = this.productList;
        this.productList = dataList.filter(function (element) {
            return (product !== element.name);
        });
    };
    ProductList.prototype.showAllProductTableInConsole = function () {
        var data = this.productList;
        var showingData = [];
        for (var i = 0; i < data.length; i++) {
            var obj = { ID: data[i].productID,
                Name: data[i].name,
                Price: data[i].price,
                Catergory: data[i].category };
            showingData.push(obj);
        }
        console.table(showingData);
    };
    ProductList.prototype.updatingProduct = function (id, newName, newPrice, newQuality, newCategory) {
        var data = this.productList;
        for (var i = 0; i < data.length; i++) {
            if (id === data[i].productID) {
                data[i].name = newName;
                data[i].price = newPrice;
                data[i].quality = newQuality;
                data[i].category = newCategory;
                break;
            }
        }
    };
    ProductList.prototype.findProductByName = function (findName) {
        var data = this.productList;
        var newData = data.filter(function (element) {
            return (element.name === findName);
        });
        this.showTableInConsole(newData);
    };
    ProductList.prototype.findProductById = function (findID) {
        var data = this.productList;
        var newData = data.filter(function (element) {
            return (element.productID === findID);
        });
        this.showTableInConsole(newData);
    };
    ProductList.prototype.showTableInConsole = function (data) {
        var showingData = [];
        for (var i = 0; i < data.length; i++) {
            var obj = { ID: data[i].productID,
                Name: data[i].name,
                Price: data[i].price,
                Catergory: data[i].category };
            showingData.push(obj);
        }
        console.table(showingData);
    };
    return ProductList;
}());
exports.ProductList = ProductList;
