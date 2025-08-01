// src/content/youtube-detector.js

const processedVideos = new Set();

async function main() {
    const enabled = await StorageManager.get('enabled', true);
    if (!enabled) {
        OverlayManager.removeOverlay();
        return;
    }

    const observer = new MutationObserver(async (mutations, obs) => {
        const videoElement = document.querySelector('video.html5-main-video');
        const videoId = new URLSearchParams(window.location.search).get('v');

        if (videoElement && videoId && !processedVideos.has(videoId)) {
            processedVideos.add(videoId);

            const uploadDate = YouTubeParser.getUploadDate();
            if (uploadDate) {
                const position = await StorageManager.get('position', 'top-right');
                const format = await StorageManager.get('format', 'relative');
                const formattedDate = DateFormatter.formatDate(uploadDate, format);
                OverlayManager.showOverlay(formattedDate, { position });
            } else {
                console.warn("YouTube Date Extension: Could not find upload date.");
            }
        }

        if (!videoId && processedVideos.size > 0) {
             processedVideos.clear();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

window.addEventListener('yt-navigate-finish', main);

main();