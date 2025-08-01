// src/content/overlay-manager.js

class OverlayManager {
    /**
     * Creates and displays an overlay with the given text on the video.
     * @param {string} text The text to display in the overlay.
     * @param {object} settings The user-defined settings.
     */
    static showOverlay(text, settings) {
        // Remove any existing overlay first.
        this.removeOverlay();

        const videoContainer = document.querySelector('#movie_player');
        if (!videoContainer) {
            console.warn("YouTube Date Extension: Video container not found.");
            return;
        }

        const overlay = document.createElement('div');
        overlay.id = 'youtube-date-overlay';
        overlay.textContent = text;
        
        // Apply classes based on settings
        overlay.classList.add('youtube-date-overlay-base');
        overlay.classList.add(`position-${settings.position || 'top-right'}`);

        videoContainer.appendChild(overlay);
    }

    /**
     * Removes the overlay from the page.
     */
    static removeOverlay() {
        const existingOverlay = document.getElementById('youtube-date-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
    }
}