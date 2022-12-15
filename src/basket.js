const data = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(data.inventory))
// console.log(inventory)

class Basket {
    
  constructor(capacity = 10) {
    this.items = []
    this.capacity = capacity
  }

  add(sku) {
    if (this.items.length >= this.capacity) {
      return false
    }
    const found = this.items.find((bagel) => bagel.sku === sku)

    if (found) {
      found.quantity += 1
      return found
    }

    const bagelToAdd = inventory.find((bagel) => bagel.sku === sku)
    const copiedBagel = { ...bagelToAdd, quantity: 1 }
    this.items.push(copiedBagel)
    return copiedBagel
  }
  remove(sku){
    const found = this.items.find((bagel)=>bagel.sku === sku)
    if (!found) return false

    this.items = this.items.filter((bagel) => bagel.sku !== found.sku)
    return found

  }
  toMuch(){
    const itemsQuantity = this.items.reduce((accumulator, item)=>accumulator + item.quantity, 0)
    // let q = this.items[0].quantity
    // const to = this.capacity >= q
    // console.log("fulll", to, this.capacity, q)
    const isFull = itemsQuantity === this.capacity
    if (isFull) {
      return true
    }
    return false
    // isFull ? true : false
  }
  displayPrice(){
    return inventory.map((bagel)=>{
        const { sku, price, variant } = bagel
        return { sku, price, variant }
    })
  }
  totalCost(){
    let total = 0
    for(let i = 0; i < this.items.length; i++){
        total += Number(this.items[i].price) 
        console.log(total)
    }
    return total.toFixed(2)
  }
}
const basket = new Basket
console.log('hell', basket.displayPrice())

module.exports = {
  Basket
}

