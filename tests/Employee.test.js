//can create an employee, 
//set name, 
//set id, 
//set email 
//and get all of these things

const Employee = require("../lib/employee")

describe('Employee', () => {
    describe('createEmployee', () => {
        it('should create an object of an employee', () => {
            //arrange and act new variable
            const employee = new Employee();
            //assert they type of for employee
            expect(typeof(employee)).toBe('object');
        })
    })
})