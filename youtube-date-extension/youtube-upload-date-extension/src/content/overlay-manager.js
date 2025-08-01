// src/content/overlay-manager.js

class OverlayManager {
    static overlay = null;
    static fadeTimeout = null;

    /**
     * Creates and displays an overlay with the given text on the video.
     * @param {string} text The text to display in the overlay.
     * @param {object} settings The user-defined settings.
     */
    static showOverlay(text, settings) {
        this.removeOverlay();

        const videoContainer = document.querySelector('#movie_player');
        if (!videoContainer) {
            console.warn("YouTube Date Extension: Video container not found.");
            return;
        }

        this.overlay = document.createElement('div');
        this.overlay.id = 'youtube-date-overlay';
        this.overlay.textContent = text;
        
        this.overlay.classList.add('youtube-date-overlay-base');
        this.overlay.classList.add(`position-${settings.position || 'top-right'}`);
        
        videoContainer.appendChild(this.overlay);

        // Add fade behavior
        this.overlay.classList.add('visible');
        this.resetFadeTimeout();

        videoContainer.addEventListener('mouseenter', this.handleMouseEnter);
        videoContainer.addEventListener('mouseleave', this.handleMouseLeave);
    }

    static resetFadeTimeout() {
        if (this.fadeTimeout) {
            clearTimeout(this.fadeTimeout);
        }
        this.fadeTimeout = setTimeout(() => {
            if (this.overlay) {
                this.overlay.classList.remove('visible');
            }
        }, 3000); // Fade out after 3 seconds
    }

    static handleMouseEnter() {
        if (OverlayManager.overlay) {
            OverlayManager.overlay.classList.add('visible');
            if (OverlayManager.fadeTimeout) {
                clearTimeout(OverlayManager.fadeTimeout);
            }
        }
    }

    static handleMouseLeave() {
        OverlayManager.resetFadeTimeout();
    }

    /**
     * Removes the overlay from the page.
     */
    static removeOverlay() {
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
        const videoContainer = document.querySelector('#movie_player');
        if (videoContainer) {
            videoContainer.removeEventListener('mouseenter', this.handleMouseEnter);
            videoContainer.removeEventListener('mouseleave', this.handleMouseLeave);
        }
        if (this.fadeTimeout) {
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
        }
    }
}
