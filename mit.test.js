var utils  = require('course-utilities');
var mit = utils.load('./mit.js', 'mit');

describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascot');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('pink');    
    });

    test('Founded range', () => {
        expect(mit.founded).toBeLessThanOrEqual(1900);
        expect(mit.founded).toBeGreaterThanOrEqual(1900);    
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('Carpe diem');

    });
});