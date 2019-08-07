let student1 = {
    name: 'Batman',
    age: 20,
    city: 'SF',
    isASuperHero: false
};
console.log(student1);

let student2 = {
    name: 'Vincent Cassel',
    age: 48,
    city: 'Chez Mwaa',
    isASuperHero: true
};
console.log(student2);

/*console.log(student1)
*/

/*Check if certain conditions are met using conditional statements
*/

if (student2.Age <= 48) {
    console.log('You\'re too young, sorry');
} else {
    console.log('Nice to meet you');
}

/*Check multiple conditions using Switch statements
*/

switch (student2.isASuperHero) {
    case true :
        console.log('Hi baby');
        break;
    case false :
        console.log('Go back to your country!');
        break;
    default:
        console.log('We don\'t know what to do with yourself :(');
}

switch (student1.isASuperHero) {
    case true :
        console.log('Hi baby');
        break;
    case false :
        console.log('Go back to your country!');
        break;
    default:
        console.log('We don\'t know what to do with yourself :(');
}
