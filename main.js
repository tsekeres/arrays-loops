console.log("Ho Ender");

const students = ['Katy', 'Jackie', 'Sean', 'Tad'];

// console.log(students.length);
// ************accessing items in the array*******************
// console.log(students[1]);

// console.log(students[students.length -1]); // gives you last item


// students[0] = 'Matthew';//   reassign an item in first position [0]

// const valuePrinter = (array, index) => {
//   return (array[index]); 
// }

// console.log(valuePrinter([1,2,3,4,5,6], 4));

// const searchArray = (array, name) => {
//   return array.includes(name);
// };
// console.log(searchArray(students, 'Tad')); 

// this check to see if Greg is in the array.

// **************LOOPS*************

// for (let i = 0; i <= 15; i++) {
//   console.log(i);
// }
// ***inside a funtion***
// const functionForTad = () => {
//   for (let i = 0; i <= 15; i++) {
//     console.log(i);
//   }
// }

// functionForTad();

// ***********arrays with loops*************
// const ec14Instructors = ['aja', 'Trinity', 'Dr. T', 'Discussion Ticket'];

// for (let i = 0; i < ec14Instructors.length; i++) {
//   console.log(ec14Instructors[i]);
// }

// ********************************

// *************arrays, loops, functions******************

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const colorLoop = () => {
  let domString = '';

  for (let i = 0; i < colors.length; i++) {
    domString += `<h1>${colors[i]}</h1>`
    
  }

  console.log(domString);
}

// colorLoop();

const instructors = [
  { first: 'Trinity', last: 'Christiana' },
  { first: 'Aja', last: 'Washington' },
  { first: 'Teresa', last: 'Vasquez' },
]

const nameLoop = () => {
  let domString = '';

  for (let i = 0; i < instructors.length; i++) {
    domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`;
  }

  console.log(domString);
}

// nameLoop();

// *******************ARRAY-METHODS******************

const array1 = ['cow', 'dog', 'cat'];

// const string1 = array1.join(', '); turns it into a string

// console.log(string1);

// const array1 = ['cow', 'dog', 'cat'];

// const string1 = array1.join(', ');
// const string1ToArray = string1.split(', '); splits it back to an array
// console.log(string1);

// .push() and .pop()

// array1.pop(); pops 'cat' off the array
// array1.push('cat'); puts it back on the end

// .unshift(); adds an item and shifts everything to the right.
// .shift(); deletes first item and shifts to the left
