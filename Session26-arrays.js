// WRITING IN .js FILE TYPE , CHECKING IN TERMINAL. GL HOMEWORKHUNTER ( BY : TEDO TURMANIDZE)


// t1 

// let names = ["maxo","saba","gogita","sulxani"];
// let places = ["soxumi","signagi","kvareli","tbilisi"];

// const sorting = names.map(name =>{
// const randomPalaces = places[Math.floor(Math.random()* places.length)];
// return `${name} -${randomPalaces} `

// });
// console.log(sorting);


// t2

// 1.1
// let pokemon = ["pikachu","mikachu","shikachu","likachu"];
// let powers = ["100","200","300","400"];

// const newArray = pokemon.map(name => {
//   const randomPowers = powers[Math.floor(Math.random() * powers.length)];
//   return `${name} - ${randomPowers}`;
// });

// const filtering = powers.filter(p => parseInt(p) >= 200);

// console.log(newArray);
// console.log("Filtered powers:", filtering);

// 1.2
// const pokemons = [
//   { name: 'Pikachu', CP: 320 },
//   { name: 'Charizard', CP: 900 },
//   { name: 'Bulbasaur', CP: 450 },
//   { name: 'Dragonite', CP: 1500 }
// ];

// const betterPokemon = pokemons.filter(pokemons => pokemons.CP >= 500)

// console.log(betterPokemon);

// t3
// const avengers = [
//   { name: 'Spiderman', money: 1000 },
//   { name: 'Thanos', money: 2000 },
//   { name: 'Hulk', money: 1500 },
//   { name: 'Ironman', money: 1800 },
//   { name: 'Thor', money: 1300 }
// ];

// const totalMoney = avengers.reduce((sum,hero) =>{
//   return sum + hero.money;
// }, 0);

// console.log(totalMoney);


// t4
// let directions = ["left","right","forward","backward"]

// const newDirections = directions.map(element => `Move ${element}`);

// console.log(newDirections);




// t5
// let names = ["luka","gio","yoda","levani","kuwura"];
// const found = names.find(element => element === "yoda");

// console.log(found);




// t6
// let items = ["suitcase","backpack","jacket"];
//  items.push("snacks");
// // items.pop();
// console.log(items);


// t7
// let locations = ['Times Square', 'Central Park', 'Brooklyn'];
// locations.sort();
// console.log(locations);


// t8
// let skills = [ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ];

// const lastThree = skills.slice(-3);

// console.log(lastThree);



// t9
// let numbers = [3, 7, 33, 22];

// const turnBinary = numbers.map(num => num.toString(2));
// const highestValue = numbers.reduce((max,num)=>{
//   return num > max ? num : max;
// },0);

// console.log(turnBinary);
// console.log(highestValue);


// t10

let riskLevels = [99, 135, 76, 200, 150, 89];
const turnHex = riskLevels.map(num => num.toString(16));
const filterRisks = riskLevels.filter(riskLevels => riskLevels >= 100);
const totalRisks = riskLevels.reduce((sum , risks) => {
    return  sum + risks;
}, 0);
const firstRisk = riskLevels.find(element => element >= 150);
const spliceRisk = riskLevels.splice(80);


console.log(`Turn into Binary => ${turnHex}`);
console.log(`Risks above 100 => ${filterRisks}`);
console.log(`Total sum of risks => ${totalRisks}`);
console.log(`First risk above 150 => ${firstRisk}`);
console.log(spliceRisk);





