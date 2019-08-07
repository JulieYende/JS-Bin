/*
Creating objects & their attibutes with classes
*/

let singer1 = {
  name: 'Kool Shen',
  group: 'NTM',
  age: 222,
  hasBeenInvited: 'dfgd'
};

/*
if (singer1.age < 100) {
  console.log('Life has been hard');
} else{
  console.log('You are almost there!');
}
*/

let singer2 = {
  name: 'Ringo Starr',
  group: 'The Beatles',
  age: 5,
  hasBeenInvited: false
};

if (singer2.age > 4) {
  console.log('Life has been hard');
} else{
  console.log('You are almost there!');
}

let singer3 = {
  name: 'Ben-J',
  group: 'Neg Marron',
  age: 32,
  hasBeenInvited: true
};

switch (singer2.hasBeenInvited) {
    case true :
        console.log('Go Fuck Urself');
        break;
    case false :
        console.log('Bienvenido a casa!');
        break;
    default:
        console.log('On ne sait pas quoi faire de vous :(');
}

/*let singerName = singer.name
console.log(singer1.age)
console.log(singer2.age)
console.log(singer3.age)
*/

/*
IF singer1 is older than 100, prints "Life has been hard, hey?"
ELSE prints "You're almost there"
*/

/* let age = 23;
if (age < 100) {
  console.log('Life has been hard');
} else{
  console.log('You are almost there!');
}
*/

/*
IF singer has already been invited, prints "Bienvenido a casa"
ELSE prints "Go Fuck Urself"
*/

/*
switch (singer1.hasBeenInvited) {
    case true :
        console.log('Go Fuck Urself');
        break;
    case false :
        console.log('Bienvenido a casa!');
        break;
    default:
        console.log('On ne sait pas quoi faire de vous :(');
}
*/
