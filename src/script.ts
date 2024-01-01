// console.log('Hello world');

// variable
// const country = "Bangladesh";

// function
// const showFunction = () => {
// return console.log('This is Function');
// }
// showFunction();



// 03. =============== Data Type ===============
// when declare and assign in one line;
// let playerName = 'sakib';
// playerName = 32 // it will error : Type 'number' is not assignable to type 'string'.

// playerName = 'Adnan'; // this is correct
// console.log(playerName);

// let age = 45;
// age = 'Tamim'; // error: Type 'string' is not assignable to type 'number'. because variable declare in Number.
// age = 47;
// console.log(age);

// when we first declare, and assigned in second line, it will not show any error
// let playerName2; // any type of variable
// playerName2 = 'Murtaja';
// playerName2 = 45; // no error
// console.log(playerName2);


// ======= function ===========
// function multiply(a: number, b: number) {
//     return a + b;
// }
// console.log(multiply('4', 5)); // Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(multiply(4, 5)); // no error


// ============== Array ==========
/**
const array1 = []; // any type
const array2 = [1, 2, 3, 4, 5]; // number
const mixed = [27, 'zayed', true]; // (string | number | boolean)[]

array1.push(4); // no error
array1.push('4'); // no error
// array2.push('5'); // error: Argument of type 'string' is not assignable to parameter of type 'number'.
mixed.push('abdullah'); // no error
mixed.push(55); // no error
mixed.push(false); // no error
// mixed.push({ 
//     age: 5
// }) // error: Argument of type '{ age: number; }' is not assignable to parameter of type 'string | number | boolean'.

// console.log(array1);
// console.log(array2);
// console.log(mixed);
*/

// ========== Object type ==============
// const person = {
//     name: 'Sakib',
//     age: 39,
//     isMan: true
// }

// person.age = 'Tamim'; // error: Type 'string' is not assignable to type 'number'.
// person.country = 'Bangladesh'; // error: Property 'country' does not exist on type '{ name: string; age: number; isMan: boolean; }'.
// person.name = 'Tamim';
// console.log(person);








