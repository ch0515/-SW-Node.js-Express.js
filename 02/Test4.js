class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    explain() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

const duck = new Animal("duck", "quack");
const duck = null;

module.exports = duck;