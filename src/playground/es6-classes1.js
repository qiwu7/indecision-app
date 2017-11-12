class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreating() {
        //return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` His/her major is ${this.major}.`;
        }

        return description;
    }
}

const student1 = new Student('Mike', 26, 'Computer Science');
console.log(student1.getDescription());

const student2 = new Student();
console.log(student2.getDescription());

class Traveler extends Person {
    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation()  {
        return !!this.homeLocation;
    }

    getGreating() {
        let greating = super.getGreating();

        if (this.hasHomeLocation()) {
            greating += ` I am visiting from ${this.homeLocation}.`;
        }

        return greating;
    }
}

const traveler1 = new Traveler('Mike', 30, 'Philadelphia');
console.log(traveler1.getGreating());