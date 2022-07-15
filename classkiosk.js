class kioskCalculate{
    constructor(fruitType, quantity){
        this.fruitType = fruitType
        this.quantity = quantity
        this.fruitPriceList = {"Lemon":80,"Apple":50,"Pineapple":200},
        this.getTotalCost = function(){
            return `${quantity} ${fruitType} for KES ${quantity * this.fruitPriceList.Pineapple}`
        }
    }
}
var kioskCalc = new kioskCalculate("Pineapple",5)
console.log(kioskCalc.getTotalCost())
