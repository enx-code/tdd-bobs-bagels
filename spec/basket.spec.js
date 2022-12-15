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
})
