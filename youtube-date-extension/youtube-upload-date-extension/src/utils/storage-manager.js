// src/utils/storage-manager.js

class StorageManager {
    /**
     * Gets a value from storage.
     * @param {string} key The key to retrieve.
     * @param {*} defaultValue The default value to return if the key doesn't exist.
     * @returns {Promise<*>} The stored value or the default value.
     */
    static get(key, defaultValue) {
        return new Promise((resolve) => {
            chrome.storage.sync.get({ [key]: defaultValue }, (result) => {
                resolve(result[key]);
            });
        });
    }

    /**
     * Sets a value in storage.
     * @param {string} key The key to set.
     * @param {*} value The value to store.
     * @returns {Promise<void>}
     */
    static set(key, value) {
        return new Promise((resolve) => {
            chrome.storage.sync.set({ [key]: value }, () => {
                resolve();
            });
        });
    }
}
