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
}
const basket = new Basket
console.log('hell', basket.add())

module.exports = {
  Basket
}

