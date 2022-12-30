const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    //set github username
    describe('set github username', () => {
        it('should set the github username to the engineer object', () => {
            const github = 'Tobin-Matt';
            const engineer = new Engineer('Matt', 1234, 'test@email.com', github);
            expect(engineer.github).toBe(github);
        })
    })

    //get the engineer's github username from the getGithub() method
    describe('get github username', () => {
        it('should return the github username from the engineer object', () => {
            const engrUsername = 'Tobin-Matt';
            const newEngineer = new Engineer('Matt', 1234, 'test@email.com', engrUsername);
            expect(newEngineer.getGithub()).toBe(engrUsername);
        })
    })
    describe('get role of "Engineer"', () => {
        it('should return a role of "Engineer"', () => {
            const engrRole = 'Engineer';
            const newEnginner = new Engineer('Matt', 1234, 'test@email.com', 'Tobin-Matt');
            expect(newEnginner.getRole()).toBe(engrRole);
        })
    })
})