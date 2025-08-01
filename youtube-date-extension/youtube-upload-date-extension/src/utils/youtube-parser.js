// src/utils/youtube-parser.js

class YouTubeParser {
    /**
     * Finds and extracts the upload date from the YouTube page.
     * YouTube's structure can change, so this might need updating.
     * @returns {string|null} The upload date as a string, or null if not found.
     */
    static getUploadDate() {
        // This is a common selector where the upload date is found.
        // It might be in a meta tag or a specific element in the page.
        const dateElement = document.querySelector('#info-strings yt-formatted-string');
        
        if (dateElement && dateElement.textContent) {
            return dateElement.textContent.trim();
        }

        // Fallback for other possible locations
        const metaElement = document.querySelector('meta[itemprop="uploadDate"]');
        if (metaElement && metaElement.content) {
            return metaElement.content;
        }

        return null;
    }
}
