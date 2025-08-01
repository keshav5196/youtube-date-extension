// src/utils/youtube-parser.js

class YouTubeParser {
    /**
     * Finds and extracts the upload date from the YouTube page.
     * @returns {string|null} The upload date as a string, or null if not found.
     */
    static getUploadDate() {
        // Strategy 1: Look for the info string
        const infoElement = document.querySelector('#info-strings yt-formatted-string');
        if (infoElement && infoElement.textContent) {
            return infoElement.textContent.trim();
        }

        // Strategy 2: Look for the meta tag
        const metaElement = document.querySelector('meta[itemprop="uploadDate"]');
        if (metaElement && metaElement.content) {
            return metaElement.content;
        }

        // Strategy 3: Look for the date in the player response (more advanced)
        // This would require intercepting network requests or accessing `ytplayer.config`
        // For now, we'll stick to DOM parsing.

        console.warn("YouTube Date Extension: Could not find upload date using known methods.");
        return null;
    }
}