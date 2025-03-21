// WRITING IN .js FILE TYPE , CHECKING IN TERMINAL. GL HOMEWORKHUNTER ( BY : TEDO TURMANIDZE)


// EXERCISE 1
// function compareAttack(pokemon1,atack1,pokmen2,atack2){
//   if(atack1 > atack2){
//     console.log(`${pokemon1} is stronger`);
//   }else if (atack2 > atack1){
//     console.log(`${pokmen2} is stronger`);
//   } else {
//     console.log("its tie bro they are equall")
//   }

// }
// compareAttack("Pikachu", 515, "Charizard", 515)







// EXERCISE 2 
// function castSpell(spell,wizard){
//   console.log(`${wizard} casts ${spell}`);
// }

// castSpell("Hermione","Expelliarmus");





// EXERCISE 3
// function calculateBounty(currentBounty,increase){
//   return currentBounty + increase;
// }
// calculateBounty(1_500_000_000, 500_000_000);
// const newLuxury = calculateBounty(1_500_000_000, 500_000_000);
// console.log(newLuxury);




// EXERCISE 4
// function trainJedi(name,strength = 50){
//   return `${name} has ${strength} Power`;
// }
// console.log(trainJedi("Luke", 100)); 
// console.log(trainJedi("Rey"));  




// EXERCISE 5
// function gollumSays(phrase) {
//   return `${phrase}... ${phrase}... ${phrase}`;
// }

// console.log(gollumSays("My precious"));



// EXERCISE 6
// const powerUP = function(jumpheight){
//   return jumpheight * 2;
// };

// console.log(powerUP(5));



// EXERCISE 7
// function shadowClone(count){
//   return count*5;
// }

// console.log(`${shadowClone(10)} clones created`)




// EXERCISE 8 
// function sortStudent(name,callback){
//   console.log(`Sorting ${name} into...`);
 
// };

// function callback() {
//   const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
//   const randomIndex = Math.floor(Math.random() * houses.length);
//   callback(houses[randomIndex])
// }


// EXERCISE 9
// function snapFingers(){
//   let stones = 4;
//   function checkStones(){
//     if (stones === 6){
//       return `Thanos has ${stones} stones. The unierse trembles !`;
//     }else{
//       return "Thanos doesnot have enought stones !";
//     }
//   }
//   return checkStones();
  
//   }

//   console.log(snapFingers());






// EXERCISE 10
// turnBackTime();
// function turnBackTime(){
//   console.log("moving back to time")
// }
//  // reason is simple and is connected with js Hoisting , js automaticly converts all functions on top and then makes commands , in this they firstly it declared function and then made turnBackTime(); function


// EXERCISE 11
// function batman(){
//   function realBatman(){
//     return "I am Batman"
//   }
//   return realBatman();
// }
// const bruce = batman();
// console.log(bruce);



EXERCISE 12
function magicMirror(message,transformFunction){
  return `the miror says : ${transformFunction(message)}`;
}
console.log(magicMirror("Will i be rich ?",str => str.toUpperCase()));