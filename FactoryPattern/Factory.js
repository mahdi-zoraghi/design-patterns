// https://en.wikipedia.org/wiki/Factory_method_pattern

class Developer {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Tester {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class EmployeeFactory {
  static create(name, type) {
    switch (type) {
      case "developer":
        return new Developer(name, type);
      case "tester":
        return new Tester(name, type);
    }
  }
}

const employees = [];

employees.push(EmployeeFactory.create("Mahdi", "developer"));
employees.push(EmployeeFactory.create("Ali", "developer"));
employees.push(EmployeeFactory.create("John", "tester"));
employees.push(EmployeeFactory.create("Jane", "tester"));

for (const employee of employees) {
  console.log(employee);
}
