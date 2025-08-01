// src/content/overlay-manager.js

class OverlayManager {
    /**
     * Creates and displays an overlay with the given text on the video.
     * @param {string} text The text to display in the overlay.
     */
    static showOverlay(text) {
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
        
        // Apply some basic styling. This will be enhanced by overlay.css.
        overlay.style.position = 'absolute';
        overlay.style.top = '10px';
        overlay.style.right = '10px';
        overlay.style.zIndex = '9999';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.color = 'white';
        overlay.style.padding = '5px 10px';
        overlay.style.borderRadius = '5px';
        overlay.style.fontSize = '14px';

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
