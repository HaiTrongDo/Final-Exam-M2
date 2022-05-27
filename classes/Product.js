"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price, quality, date, category) {
        this.category = "Phone";
        this.name = name;
        this.category = category;
        this.price = price;
        this.quality = quality;
        this.date = date;
        this.description = "";
        this.productID = Product.Id++; // tao ID cho sp
    }
    Product.Id = 100;
    return Product;
}());
exports.Product = Product;
