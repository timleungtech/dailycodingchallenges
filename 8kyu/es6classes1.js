//Fun with ES6 Classes #1 - People, people, people
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName || 'John'
    this.lastName = lastName || 'Doe'
    this.age = age || 0
    this.gender = gender || 'Male'
  }
  sayFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

Person.greetExtraTerrestrials = function (raceName) {
  return 'Welcome to Planet Earth ' + raceName
}