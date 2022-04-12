let makes = ['Honda', 'Ferrari', 'BMW', 'Audi'];
let models = ['S2K', 'M3', 'Testarosa', 'R8'];
let years = [2008, 1994, 1998, 2003];
let colors = ['Red', 'White', 'Black', 'Silver'];
let convertable = [true, false];

let rando1 = Math.floor(Math.random() * makes.length);
let rando2 = Math.floor(Math.random() * models.length);
let rando3 = Math.floor(Math.random() * years.length);
let rando4 = Math.floor(Math.random() * colors.length);
let rando5 = Math.floor(Math.random() * 5) + 1;
let rando6 = Math.floor(Math.random() * convertable.length);


let car = {
    make: makes[rando1],
    models: models[rando2],
    years: years[rando3],
    colors: colors[rando4],
    passengers: rando5,
    convertable: convertable[rando6]
}

console.log(car)