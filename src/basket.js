const data = require('../inventory.json')
const inventory = JSON.parse(JSON.stringify(data.inventory))
// console.log(inventory)

class Basket {
  constructor(capacity=5) {
    this.items = []
    this.capacity = capacity
    // this.inventory = inventory
  }
}
// const shop = new Basket()
// console.log(shop)
module.exports = {Basket}
