const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //values for name, id, and email should be received from the prompts
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;