const products = [
    {id: 1, name: 'hp', price: 65000},
    {id: 2, name: 'dell', price: 15000},
    {id: 3, name: 'mac', price: 165000},
    {id: 4, name: 'lenevo', price: 45000},
]

const names = products.map(product => product.name)
console.log(names)
const prices = products.map(p => p.price)
console.log(prices)

// forEach
products.forEach(product => console.log(product.id))

// filter
const expensive = products.filter(product => product.price > 50000)
console.log(expensive)

// find
const afforded = products.find(product => product.price < 50000)
console.log(afforded)

// reduce
const totalSum = products.reduce((acum, c) => acum + c.price , 0)
console.log(totalSum)