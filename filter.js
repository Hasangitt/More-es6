const numbers =  [1, 2, 5, 4, 9, 4];

const players = [75, 65, 67, 72, 78]
// const selected = players.filter(p => p > 70);
// console.log(selected)

const selected = players.filter(p => p % 2 === 0)
console.log(selected)

const friends = ['hasan', 'shafi', 'ridwan', 'pulakdey']
const oddFrnd = friends.filter(frnd => frnd.length % 2 === 0)
console.log(oddFrnd)

// const friends = ['hasan', 'shafi', 'ridwan', 'pulakdey']
// const oddFrnd = friends.filter(frnd => frnd.length > 4)
// console.log(oddFrnd)