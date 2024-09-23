// const data = [{id: 1, name: 'babul', address: 'patiya'}]
// console.log(data[0].address)
// console.log(data[0].name)


const products = {
    count: 50000,
    data: [
        {id: 1, name: 'hp laptop', price: 15000},
        {id: 2, name: 'dell laptop', price: 25000},     
    ]
}

console.log(products.data[1].price)

const user = {
    id: 4000,
    name: 'nannu',
    address: {
        street: {
            first: 'patiya thana',
            second: 'dak banglo',
            third: 'patiya pourashava',
        },
        city: 'dhaka',
    }
}

console.log(user.address.street.second)