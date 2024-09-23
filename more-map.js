const numbers = [10, 14, 4, 58, 41];

const doubled = numbers.map(num => num * 2)
console.log(doubled)
const fiveBonus = numbers.map(num => num + 5);
console.log(fiveBonus)
const halfs = numbers.map(num => num / 2);
console.log(halfs)

const friends = ['hasan', 'shafi', 'ridwan', 'pulakdey']
const length = friends.map(friend => friend.length)
console.log(length)

const fristLetter = friends.map(friend => friend[0]);
console.log(fristLetter)