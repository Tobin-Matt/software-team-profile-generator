const Intern = require('../lib/intern');

describe('Intern', () => {
    //set school name
    describe('set school name', () => {
        it('should set the school name of the Intern object', () => {
            const school = 'Fresno State';
            const intern = new Intern('Matt', 1234, 'test@email.com', school);
            expect(intern.school).toBe(school);
        })
    })

    //get the school name from the getSchool() method
    describe('get school name from object', () => {
        it('should return the school name from the intern object', () => {
            const schoolName = 'Fresno State';
            const newIntern = new Intern('Matt', 1234, 'test@email.com', schoolName);
            expect(newIntern.getSchool()).toBe(schoolName);
        })
    })
    describe('get role of "Intern"', () => {
        it('should return a role of "Intern"', () => {
            const internRole = 'Intern';
            const newIntern = new Intern('Matt', 1234, 'test@email.com', 'Fresno State');
            expect(newIntern.getRole()).toBe(internRole);
        })
    })
})