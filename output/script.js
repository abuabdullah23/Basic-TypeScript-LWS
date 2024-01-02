"use strict";
// console.log('Hello world');
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
userDetails(5653464367456, {
    name: 'Tamim',
    age: 55
});
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
sayHello({
    name: 'Sakib',
    age: 45
});
