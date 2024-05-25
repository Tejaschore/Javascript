const marvel_heros = ["ironman", "thor" , "spiderman"]

const dc_heros = ['superman' , 'batman' , 'flas']

// console.log(marvel_heros);
// console.log(dc_heros);
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// const allNewHeros = [...marvel_heros, ...dc_heros] // use spread operator
// console.log(allNewHeros);

console.log(Array.isArray("tejas"));
console.log(Array.from("Tejas"));

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));