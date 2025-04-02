// WRITING IN .js FILE TYPE , CHECKING IN TERMINAL. GL HOMEWORKHUNTER ( BY : TEDO TURMANIDZE)



// CC#1
let markMass = 178;
let markHeight = 1.69;

let johnMass = 92 ;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight*2);
let johnBmi = johnMass / (johnHeight*2);


console.log(`Marks height is ${markHeight}m and mass is ${markMass}kg , Johns height is ${johnHeight}m and mass is ${johnMass}kg`);


if (markBmi>johnBmi){
  console.log("Mark's BMI is higher than John's");
}else{
  console.log("John's BMI is higher than Mark's");
}