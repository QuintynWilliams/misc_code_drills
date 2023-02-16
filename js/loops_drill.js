"use strict";
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/loops/exercises.html
// 9.9.1. for Practice
// EX 1 Construct for loops that accomplish the following tasks:
// Print the numbers 0 - 20, one number per line.
for (let i = 0 ; i < 21; i++) {
    console.log(i)
}

// Print only the ODD values from 3 - 29, one number per line.
for (let i = 3; i < 30; i += 2) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i)
    }
}

// Print the EVEN numbers 12 down to -14 in descending order, one number per line.
for (let i = 12; i > -15; i -= 2) {
    if (i % 2 == 1) {
        continue;
    } else {
        console.log(i)
    }
}

// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
for (let i = 50; i > 19; i--) {
    if (i % 3 !== 0) {
        continue;
    } else{
        console.log(i)
    }
}


/* EX 2 Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42],
then construct for loops to accomplish the following tasks:
    - Print each element of the array to a new line.
    - Print each character of the string---in reverse order---to a new line.*/
let strHolder = 'LaunchCode';
let sumArray = [1, 5, 'LC101', 'blue', 42];

for (let x of sumArray) {
    console.log(`Each element of sumArray is: ${x}`);
}

for (let i = strHolder.length; i >= 0 ; i--) {
    let strArray = strHolder.split('');
    console.log(strArray[i]);
}

/* EX 3 Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
    - Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
    - In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.
    - Print the arrays to confirm the results. Print evens first. Example: console.log(evens);*/
let otherArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let firstArray = []
let secondArray = []

for (let i = 0; i < otherArray.length; i++){
    if (i == 0) {
        firstArray.push(otherArray[i]);
    } else if (i % 2 == 1) {
        secondArray.push(otherArray[i])
    } else {
        firstArray.push(otherArray[i])
    }
}
console.log(firstArray)
console.log(secondArray)


// 9.9.1. while Practice
/* Define three variables for the LaunchCode shuttle---one for the starting fuel level, another for the number
of astronauts aboard, and the third for the altitude the shuttle reaches.*/

/* EX 4 Construct while loops to do the following:
    - Prompt the user to enter the starting fuel level. The loop should continue until the user enters a
      positive value greater than 5000 but less than 30000.
    - Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the
      entry by having the loop continue until the user enters an integer from 1 - 7.
    - Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease
      the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
      (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, so the fuel
      level might not reach 0).
    - After the loops complete, output the result with the phrase, The shuttle gained an altitude of ___ km.
        - If the altitude is 2000 km or higher, add "Orbit achieved!"
        - Otherwise add, "Failed to reach orbit."*/

let lnchFuel = ''; //5000 < x < 30000
let lnchAstros = ''; //1 < y < 7
let lnchAlt = 0;

while (lnchFuel < 5000 || lnchFuel > 30000) {
    lnchFuel = parseFloat(prompt(`Enter starting fuel level:`));
}

while (lnchAstros < 1 || lnchAstros > 7) {
    lnchAstros = parseFloat(prompt(`Enter number of astronauts aboard:`));
}

do {
    lnchFuel -= (100 * lnchAstros);
    lnchAlt += 50;
} while (lnchFuel > 0)

alert(`The shuttle gained an altitude of ${lnchAlt} km.`)

if (lnchAlt > 2000) {
    alert(`Orbit achieved!`)
} else {
    alert(`Failed to reach orbit.`)
}
