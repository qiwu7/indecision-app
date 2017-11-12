const square = function(x) {
    return x * x;
};
console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(8));

const squareArrow2 = (x) => x * x;
console.log(squareArrow2(9));

//Challenge - user arrow function
//getFirstName('Mike Smith') => "Mike"
const fullName = 'Mike Smith';
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName));
