/*
Create objects with their attributes and store them
in an empty array
*/

let cars = [
  {
  brand: 'Mercedes-Benz',
  name: 'A Class',
  color: 'Black',
  isAvailable: true,
  carId: 154322
  },
  {
  brand: 'Mercedes-Benz',
  name: 'CLS',
  color: 'White',
  isAvailable: false,
  carId: 88655
  },
  {
  brand: 'Mercedes-Benz',
  name: 'X-Class',
  color: 'Red',
  isAvailable: true,
  carId: 987777
  }
];

/*
Prints the list of cars stored in the array.
console.log(cars);
/*

/*
Create a FOR loop that iterates on each cars
and console.log if they are available

for (let i = 0; i < cars.length; i++){
  console.log(cars[i].isAvailable);
}
*/

/*
Create a conditional statement to check if car is available.
If yes prints "Get ready to drive your new car! :)",
if not console.log "Sorry, try again a bit later :()"
*/

for (let i = 0; i < cars.length; i++){
  console.log(cars[i].name + ' ' + cars[i].color);
   if (cars[i].isAvaible == true)
      console.log('Get ready to drive your new car! :)')
    else
      console.log('Sorry, try again a bit later :(')
}
