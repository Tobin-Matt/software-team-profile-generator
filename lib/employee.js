//the methods for this parent class will be used in the html template literal, 
//along with the subclass methods

class Employee {
    constructor(name, id, email) {
        this.name;
        this.id;
        this.email;
    }
    getName() {
        return this.name; 
        //returns the value given for the name parameter
        //parameter will be whatever the user inputs from the prompts
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