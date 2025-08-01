// src/content/youtube-detector.js

// A set to keep track of videos we've already processed to avoid duplicates.
const processedVideos = new Set();

function main() {
    console.log("YouTube Date Extension: Initializing detector.");

    const observer = new MutationObserver((mutations, obs) => {
        // Look for the primary video element.
        const videoElement = document.querySelector('video.html5-main-video');
        const videoId = new URLSearchParams(window.location.search).get('v');

        if (videoElement && videoId && !processedVideos.has(videoId)) {
            console.log(`YouTube Date Extension: Detected new video with ID: ${videoId}`);
            processedVideos.add(videoId);

            // Once a video is found, start the process.
            const uploadDate = YouTubeParser.getUploadDate();
            if (uploadDate) {
                console.log(`YouTube Date Extension: Found upload date: ${uploadDate}`);
                const formattedDate = DateFormatter.formatDate(uploadDate);
                OverlayManager.showOverlay(formattedDate);
            } else {
                console.warn("YouTube Date Extension: Could not find upload date.");
            }
        }

        // Clean up the set if the user navigates away from a video page
        if (!videoId && processedVideos.size > 0) {
             processedVideos.clear();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Since YouTube is a single-page application, we need to handle navigation changes.
// We can listen for a custom event or use a MutationObserver.
// Let's also re-run main logic on navigation events.
window.addEventListener('yt-navigate-finish', main);

// Initial run
main();
