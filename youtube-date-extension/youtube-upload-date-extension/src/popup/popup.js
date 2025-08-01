// src/popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
    const positionSelect = document.getElementById('position');
    const formatSelect = document.getElementById('format');
    const enabledCheckbox = document.getElementById('enabled');

    // Load saved settings
    StorageManager.get('position', 'top-right').then(value => positionSelect.value = value);
    StorageManager.get('format', 'relative').then(value => formatSelect.value = value);
    StorageManager.get('enabled', true).then(value => enabledCheckbox.checked = value);

    // Save settings on change
    positionSelect.addEventListener('change', () => StorageManager.set('position', positionSelect.value));
    formatSelect.addEventListener('change', () => StorageManager.set('format', formatSelect.value));
    enabledCheckbox.addEventListener('change', () => StorageManager.set('enabled', enabledCheckbox.checked));
});
