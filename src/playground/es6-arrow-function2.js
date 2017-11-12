//argument object - no longer bound with arrow function
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(1, 55, 1001));

const addArrow = (a, b) => {
    // arguments is no longer accessable in the arrow function
    //console.log(arguments);
    return a + b;
};
// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived: function () {
        const that = this;
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        })
    }
};
user.printPlacedLived();
const userArrow = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacedLived: function () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(userArrow.printPlacedLived());


// challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 3 ,5 , 7, 9],
    // multiplyBy - a single number
    multiplyBy: 5,
    // multiply - return a new array where the numbers have been multiplied
    multyply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multyply());