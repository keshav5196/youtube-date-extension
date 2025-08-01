// src/utils/date-formatter.js

class DateFormatter {
    /**
     * Formats the date string into a more readable format.
     * @param {string} dateString The raw date string from YouTube.
     * @returns {string} A formatted date string.
     */
    static formatDate(dateString) {
        try {
            const date = new Date(dateString);
            // Simple format, e.g., "Jan 1, 2023"
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        } catch (error) {
            console.error("YouTube Date Extension: Error formatting date", error);
            // Return the original string if formatting fails.
            return dateString;
        }
    }
}
