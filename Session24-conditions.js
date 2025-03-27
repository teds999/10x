// WRITING IN .js FILE TYPE , CHECKING IN TERMINAL. GL HOMEWORKHUNTER ( BY : TEDO TURMANIDZE)



// CC#1-2
// let markMass = 178;
// let markHeight = 1.69;

// let johnMass = 92 ;
// let johnHeight = 1.95;

// let markBmi = markMass / (markHeight*2);
// let johnBmi = johnMass / (johnHeight*2);


// console.log(`Marks height is ${markHeight}m and mass is ${markMass}kg , Johns height is ${johnHeight}m and mass is ${johnMass}kg`);


// if (markBmi>johnBmi){
//   console.log("Mark's BMI is higher than John's");
// }else{
//   console.log("John's BMI is higher than Mark's");
// }





// CC#4

// let orderAmount = 51
// let tipCounter = 50 < orderAmount && orderAmount < 300 ? 15 : 20
// let tip = orderAmount * tipCounter / 100

// console.log ( `Your total is = ${orderAmount}$ + ${tip}$  (${orderAmount+tip})`) 



// cc#5

// function calculate (a,b,operator){
//   switch (operator){

//     case '+' :
//       return a + b;
//     break;

//     case '-':
//       return a - b;
//     break;

//     case '/' :
//       return a / b ;
//     break;

//     case '*':
//       return a * b;
//     break;

//   }

// }
// console.log(calculate(10, 5, '*'));
// console.log(calculate(5, 1, '-'));
// console.log(calculate(63, 2, '/'));
// console.log(calculate(14, 665, '+'));
// console.log(calculate(22, 3, '-'));



// cc#5.2
// function playGame(player1,player2){
//   if (player1 === player2){
//     console.log("Its tie !")
//   }


//   switch (player1){
//     case 'rock':
//       switch(player2){
//         case 'paper':
//         return 'Player 2 wins';
//         case 'scissors':
//           return 'Player 1 wins';
//       }
//       break;
    
//     case 'paper':
//       switch(player2){
//         case 'scissors':
//           return "Player 2 wins";
//         case 'rock':
//           return "Player 1 wins";
//       }
//       break;

//     case 'scissors':
//       switch(player2){
//         case 'rock':
//           return 'Player 2 wins';
//         case 'paper':
//           return 'Player 1 wins';
//       }
//   }
// }

// playGame('rock','rock');




// cc#6

// function triangleType(a,b,c){
//   if (a==b && b==c){
//     console.log("Equilateral");
//   }else if (a!=b && a!=c && b!=c ){
//     console.log("Scalene");
//   }else if ((a == b || a == c || b == c)){
//     console.log('Isosceles')
//   }else{
//     console.log('not triangle')
//   }

// }
// triangleType(2,2,2)


// cc#7
// function processTransaction(balance,amount,transactionType){
//   if (transactionType === "withdraw" && amount <= balance){
//     return balance-amount;
//   }else if (transactionType === "deposit"){
//     return balance+amount;
//   }else{
//     return "Insufficient funds";
//   }

//   }

// console.log(processTransaction(100,12,"deposit")); 



// cc#7.2

//  function getRoomPrice(type,isWeekend,hasDiscount){
//   let price;

// if(type === "standard"){
//   price = isWeekend ? 120 : 100;
// }else if (type === "deluxe"){
//   price = isWeekend ? 180 : 150;
// }else if (type === "suite"){
//   price = isWeekend ? 250 : 200;
// } else {
//   return "Invalid room type";
// }

// if(hasDiscount){
//   price = price * 0.9;
// }

// return price ;

//  }
//  console.log(getRoomPrice("standard", false, false)); 
//  console.log(getRoomPrice("deluxe", true, true));     
//  console.log(getRoomPrice("suite", true, false));


