// src/background/service-worker.js

// This service worker can be used for future background tasks,
// such as listening for updates or managing extension state.

chrome.runtime.onInstalled.addListener(() => {
    console.log("YouTube Date Extension installed.");
});
