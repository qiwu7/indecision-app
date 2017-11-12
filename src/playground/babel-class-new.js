class Old {
    constructor() {
        this.name = 'mike';
        this.getGreeting = this.getGreating.bind(this);
    }

    getGreating() {
        return `Hi, my name is ${this.name}.`;
    }
}

class New {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, my name is ${this.name}.`;
    }
}