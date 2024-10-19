"use strict";

/*
const userName = "Peter";

function calcAge(birthYear) {
  const currentYear = 2021;
  const age = currentYear - birthYear;

  if (age <= 60) {
    var working = true;
    const message = `Peter is still employed!`;
    console.log(message);
  }

  function yearsToRetire() {
    const retirement = 60 - age;

    if (true) {
      console.log(retirement);
    }
  }
  //   console.log(retirement);

  yearsToRetire();
}

calcAge(1975);
*/

// var firstName = "Hossein";
// console.log(this);
// console.log(window);

// function scope
// block scope

/*
function calcAge(birthYear) {
  if (true) {
    function displayHello() {
      console.log("Hello!");
    }

    displayHello();
  }
}

calcAge();
*/

/*
let userName = "Peter"; // "Negin"

function calcAge(birthYear) {
  let userName = "Negin";

  if (true) {
    const retirement = 25;
    console.log(userName);
  }

  function yearsToRetire() {
    console.log(userName);
  }

  yearsToRetire();
}

calcAge(1975);

console.log(userName);
*/

/*
////////////////////////////////
// Hoisting and TDZ

//  printHello();
//  function printHello() {
//    console.log("hello");
//  }
//  printHello();

// console.log(firstName);
// var firstName = "Cena";
// console.log(firstName);

// const, let

// let age = 28;
// function printSomething(age) {
//   const firstName = "Maryam";
//   const str = `You are ${age} year's old.`;
//   console.log(str);
// }
// printSomething();

getAge();
getAge2();
let getAge = function () {
  return 25;
};
let getAge2 = () => {
  return 25;
};
*/
