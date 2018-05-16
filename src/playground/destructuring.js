//Object destructuring
//
//
//
//
//
//
// const person = {
//     name: 'Edwin',
//     age: 27,
//     location: {
//         city: 'Minnesota',
//         temp: 69
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
//
// const {city, temp: temperature } = person.location;
//
// console.log(`${firstName} is ${age}.`);
//
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }
//
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const {name: publisherName = 'Self Published'} = book.publisher;
// const {title} = book;
//
//
// console.log(`The book '${title}' was published by ${publisherName}`);




//Array destructuring
//
//
//
//

// const address = ['177 Moreland', 'St. Paul', 'Minnesota', '55118'];
//
// const [, city, state] = address;
//
// console.log(`You are in ${city}, ${state}.`);
//
//
// const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];
//
// const [itemName, , mediumPrice] = item;
//
// console.log(`A medium ${itemName} costs ${mediumPrice}.`);