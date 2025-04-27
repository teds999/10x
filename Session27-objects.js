// WRITING IN .js FILE TYPE , CHECKING IN TERMINAL. GL HOMEWORKHUNTER ( BY : TEDO TURMANIDZE)

// ex1


// const car = {
//   model: "corola",
//   brand : "toyota",
//   year : 2023,
//   getInfo: function(){
//     return `${this.brand},${this.year},${this.model}`
//   }
// };


// console.log(car.getInfo());

// t2
// const person = {
//   name :"mamasita",
//   age : 21,
//   greet: function(){
//     console.log(`hello, my name is ${this.name} and im ${this.age} years old`);
    
//   }
// };
// person.greet();


// t3

// const student = {
// name : "musasipo",
// age : 21,
// grades : "A+",

// };

// console.log("keis:", Object.keys(student));
// console.log("values:", Object.values(student));
// console.log("entries:", Object.entries(student));

// t4
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getDetails = function() {
//     return `"${this.title}" by ${this.author}, published in ${this.year}`;
//   };
// }
// const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
// const book2 = new Book("1984", "George Orwell", 1949);


// console.log(book1.getDetails());
// console.log(book2.getDetails());



// t5

// function animal(name,species){
//   this.name = name,
//   this.species = species,
//   this.makesound = function(){
//     return "animal sound";
//   };
// }
// const pet = new animal("greengoo","cat");

// console.log(`name : ${pet.name},species : ${pet.species}`);


// t6


// class bankAccount{
//   #balance
//   constructor(initialBalance){
//     this.#balance=initialBalance;
//   }

// deposit(amount){
//   this.#balance += amount;
//   console.log(`deposited ${amount}, your balance is ${this.#balance}`);
  
// }


// withdraw(amount){
//   if (amount > this.#balance){
//     console.log('invalid amount , not enought balance');
//     return ;
//   } else {
//     this.#balance -= amount;
//     console.log(`withdrawed ${amount} , your balance is ${this.#balance}`);
//   }
// }

//   getBalance(){
//     return this.#balance;
//   }

// }


// const myAccount =  new bankAccount(2000);
// myAccount.deposit(900);
// myAccount.withdraw(300)
// console.log(myAccount.getBalance());



// t7
