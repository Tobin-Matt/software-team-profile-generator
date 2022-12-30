const Manager = require('../lib/manager');

describe('Manager', () => {
    //set the value of the office number for the Manager object
    describe('set the office number', () => {
        it('should set the office number for the manager object', () => {
            const officeNumber = 4321;
            const manager = new Manager('Matt', 1234, 'test@email.com', officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        })
    })

    //get values from methods
    describe('get office number', () => {
        it('should return the office number from the manager object', () => {
            const offNumber = 4321;
            const newManager = new Manager('Matt', 1234, 'test@email.com', offNumber);
            expect(newManager.getOfficeNumber()).toBe(offNumber);
        })
    })
    describe('get role of "Manager"', () => {
        it('should return a role of "Manager"', () => {
            const managerRole = 'Manager';
            const newManager = new Manager('Matt', 1234, 'test@email.com', 4321);
            expect(newManager.getRole()).toBe(managerRole);
        })
    })
})