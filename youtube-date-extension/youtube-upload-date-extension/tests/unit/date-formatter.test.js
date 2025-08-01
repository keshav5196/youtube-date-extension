// tests/unit/date-formatter.test.js

const DateFormatter = require('../../src/utils/date-formatter');

describe('DateFormatter', () => {
    it('should format the date correctly in absolute format', () => {
        const date = '2023-01-15T12:00:00Z';
        const formattedDate = DateFormatter.formatDate(date, 'absolute');
        expect(formattedDate).toBe('Jan 15, 2023');
    });

    it('should format the date correctly in relative format', () => {
        const date = new Date();
        date.setDate(date.getDate() - 2);
        const formattedDate = DateFormatter.formatDate(date.toISOString(), 'relative');
        expect(formattedDate).toBe('2 days ago');
    });
});
