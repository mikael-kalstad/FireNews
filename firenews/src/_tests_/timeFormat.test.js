import { shortHandTimeFormat, timeFormat } from 'scripts/timeFormat';

describe('shortHandTimeFormat script', () => {
    let date = new Date();

    // Adjust date to one week ago
    date.setDate(date.getDate() - 7);

    it('should output a week ago', () => {
        expect(shortHandTimeFormat(date)).toBe('A week ago');
    })
})

describe('shortHandTimeFormat script 2', () => {
    let date = new Date();

    // Adjust date to one week ago
    date.setDate(date.getDate() - 30);

    it('should output a month ago', () => {
        expect(shortHandTimeFormat(date)).toBe('A month ago');
    })
})

describe('timeFormat script', () => {
    // Year - month - day
    let date = new Date(2019, 10, 10);

    it('should output 10.Ocotber 2019', () => {
        expect(timeFormat(date)).toBe('10.October 2019');
    })
})