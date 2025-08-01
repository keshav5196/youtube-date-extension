// src/utils/date-formatter.js

class DateFormatter {
    /**
     * Formats the date string based on the user's preference.
     * @param {string} dateString The raw date string from YouTube.
     * @param {string} format The desired format ('relative' or 'absolute').
     * @returns {string} A formatted date string.
     */
    static formatDate(dateString, format) {
        try {
            const date = new Date(dateString);
            if (format === 'absolute') {
                return date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                });
            } else {
                return this.timeAgo(date);
            }
        } catch (error) {
            console.error("YouTube Date Extension: Error formatting date", error);
            return dateString;
        }
    }

    /**
     * Converts a date to a relative time string (e.g., "2 days ago").
     * @param {Date} date The date to convert.
     * @returns {string} The relative time string.
     */
    static timeAgo(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
}