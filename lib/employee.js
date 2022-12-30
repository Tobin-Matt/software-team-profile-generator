//the methods for this parent class will be used in the html template literal, 
//along with the subclass methods

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        //returns the value given for the name parameter
        //parameter will be whatever the user inputs from the prompts
        return this.name; 
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;