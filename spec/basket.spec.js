const { Basket } = require('../src/basket')

describe('Basket', () => {
  let basket
  beforeEach(() => {
    basket = new Basket()
  })


  it("adds a bagel if Bagel doesn't already exist in the basket", () => {
    const bagel = basket.add('BGLO')

    expect(bagel).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 1
    })
  })

  it('should return false if basket is at capacity', () => {
    const myBasket = new Basket(2)
    myBasket.add('BGLO')
    myBasket.add('BGLP')
    const result = myBasket.add('BGLE')

    expect(result).toBeFalse()
  })

  it('should update the quantity on found bagels', () => {
    basket.add('BGLO')
    const bagel = basket.add('BGLO')

    expect(bagel).toEqual({
      sku: 'BGLO',
      price: '0.49',
      name: 'Bagel',
      variant: 'Onion',
      quantity: 2
    })

    expect(basket.items).toEqual([
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 2
      }
    ])
  })
  it('should remove bagel from basket', ()=>{
    basket.add('BGLO')
    basket.remove('BGLO')
    expect(basket.items).toEqual([])
  })

  it('remove function will return the bagel that has been removed from basket', ()=>{
    basket.add('BGLO')
    const removed = basket.remove('BGLO')
    expect(removed).toEqual({
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion',
        quantity: 1
    })
  })

  it('if bagel is not in the basket, remove function will return false', ()=>{
    const dontHave = basket.remove("Do not have!")
    expect(dontHave).toBe(false)
  })

  it('should be able to tell if basket full', ()=>{
    const full = 2
    const fullBasket = new Basket(full)
    fullBasket.add('BGLO')
    fullBasket.add('BGLO')
    expect(fullBasket.toMuch()).toBe(true)
  })

  it('displayPrice function will show the price, sku and variant', ()=>{
    listOfPrice = basket.displayPrice()
    expect(listOfPrice).toEqual([
      { sku: 'BGLO', price: '0.49', variant: 'Onion' },
      { sku: 'BGLP', price: '0.39', variant: 'Plain' },
      { sku: 'BGLE', price: '0.49', variant: 'Everything' },
      { sku: 'BGLS', price: '0.49', variant: 'Sesame' },
      { sku: 'COF', price: '0.99', variant: '' },
      { sku: 'BGSE', price: '2.99', variant: 'Everything' },
      { sku: 'BGSS', price: '4.99', variant: 'Sesame' }
    ])
  })
  it('should return total price of all bagels in basket', ()=>{
    basket.add('BGSS')
    basket.add('BGSE')
    expect(basket.totalCost()).toBe('7.98')
  })
})
