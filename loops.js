// while (true) {
//     console.log('infinite loop');
// }

// while (false) {
//     console.log('this never runs');
// }

// while loop example
// let burgersEaten = 0;

// function eatBurger(index) {
//     console.log('om nom nom x ' + index);
// }

// while (burgersEaten > 10) {
//     eatBurger(burgersEaten);
//     burgersEaten++; //burgersEaten = burgersEaten + 1;
// } 

// do while loop example
// let friesEaten = 0;

// function eatFry() {
//     console.log('om nom nom');
// }

// do {
//     eatFry();
//     //friesEaten++; //removing the increment, which is part of the loop condition, causes an infinite loop
// } while (friesEaten < 1)

// let x1 = Math.random();
// let x2 = Math.random() * 10;
// let x3 = Math.round(Math.random() * 10); //9.5
// let x4 = Math.floor(Math.random() * 10);

// while loop part 2
let arrived = false;

function drive() {
    console.log('on the road again');
    let GPS = Math.round(Math.random() * 10) == 7;
    if (GPS) {
        arrived = true;
    } 
}

while (!arrived) {
    drive();
}
console.log('You have arrived');