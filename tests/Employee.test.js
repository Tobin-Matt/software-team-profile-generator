const Employee = require('../lib/employee');

describe('Employee', () => {
    //set the values for the Employee object keys
    describe('createEmployee', () => {
        it('should create an object of an employee', () => {
            //arrange and act new variable
            const employee = new Employee();
            //assert the type of for employee
            expect(typeof(employee)).toBe('object');
        })
    })
    describe('set name of object', () => {
        it('should set the name for the employee object', () => {
            const name = 'Matt';
            const employee = new Employee(name);
            expect(employee.name).toEqual(name);
        })
    })
    describe('set ID of object', () => {
        it('should set the id number for the employee object', () => {
            const id = 1234;
            const employee = new Employee('Matt', id);
            expect(employee.id).toEqual(id);
        })
    })
    describe('set Email of object', () => {
        it('should set the email address for the employee object', () => {
            const email = 'test@email.com';
            const employee = new Employee('Matt', 1234, email);
            expect(employee.email).toEqual(email);
        })
    })

    //gets the values of the new object from the methods
    describe('get Name from getName() method', () => {
        it('should return the name from the employee object', () => {
            const employeeName = 'Matt';
            const newEmployee = new Employee(employeeName);
            expect(newEmployee.getName()).toBe(employeeName);
        })
    })
    describe('get ID from getId() method', () => {
        it('should return the id from the employee object', () => {
            const employeeId = 1234;
            const newEmployee = new Employee('Matt', employeeId);
            expect(newEmployee.getId()).toBe(employeeId);
        })
    })
    describe('get email from getEmail() method', () => {
        it('should return the email from the employee object', () => {
            const employeeEmail = 'test@email.com';
            const newEmployee = new Employee('Matt', 1234, employeeEmail);
            expect(newEmployee.getEmail()).toBe(employeeEmail);
        })
    })
    //gets the type of role for the added employee
    describe('get role from getRole() method', () => {
        it('should return a role of "Employee"', () => {
            const employeeRole = 'Employee';
            const newEmployee = new Employee('Matt', 1234, 'test@email.com');
            expect(newEmployee.getRole()).toBe(employeeRole);
        })
    })
})