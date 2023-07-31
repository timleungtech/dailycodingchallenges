//Classy Classes
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getInfo() {
    return `${this.name}s age is ${this.age}`
  }
  get info() {
    return this.getInfo()
  }
}