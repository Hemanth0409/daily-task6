class Product {
    constructor(ProductCode, ProductName, Stock, Price) {
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.Stock = Stock;
        this.Price = Price;
    }
    getStock() {
        return (`Stock:${this.Stock}`)
    }
    Display() {
        console.log(`-----PRODUCT DETAILS-----`)
        console.log(`ProductCode : ${this.ProductCode}`);
        console.log(`ProductName: ${this.ProductName}`);
        console.log(`Stock:${this.Stock}`)
        console.log(`Price:${this.Price}`);

    }
}
class Activity extends Product {
    constructor(ProductCode, ProductName, Stock, Price, CoustomerName, StockNeeded, QuantitySold, TotalAmount) {
        super(ProductCode, ProductName, Stock, Price)
        this.CoustomerName = CoustomerName;
        this.StockNeeded = StockNeeded;


    }
    Sales() {

        if (this.Stock == 0) {
            console.log("Stock is empty");
        } else if (this.Stock < this.StockNeeded) {
            console.log("Dosen't have too many stock");
            console.log(`${this.Stock} quantity left`);
            console.log(`------Bill Details------`);
            console.log("TotalAmount for the item:" + (this.Stock * this.Price))


            console.log(`----Stocks Left after sales----`)
            console.log(`Stocks remaining after sales: 0`)
        } else {

            console.log(`All the product are available`)

            console.log(`---BILL DETAILS---`)
            console.log(`ProductCode : ${this.ProductCode}`);
            console.log(`StockNeeded:${this.StockNeeded}`);
            console.log(`CoustomerName:${this.CoustomerName}`)
            console.log("TotalAmount:" + this.Price * this.StockNeeded)
            console.log(`----Stocks Left after sales----`)
            console.log("ProductQuantity Left after sales:" + (this.Stock - this.StockNeeded) + " Product left")

        }
    }
}
let stock = new Activity(101, "pencil", 50, 5, "karthi", 100);
stock.Display();
stock.Sales()