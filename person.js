console.log(__filename, __dirname);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(this.name, this.age);
    }
}

module.exports = Person;