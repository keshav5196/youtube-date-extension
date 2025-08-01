# Installation Guide

This guide provides detailed installation instructions for the YouTube Upload Date Display Extension across all supported browsers.

## 🌐 Supported Browsers

- **Chrome** (Version 88+)
- **Firefox** (Version 109+)
- **Edge** (Version 88+)
- **Brave** (Version 1.0+)
- **Safari** (Version 14+)

---

## 📦 Installation Methods

### Method 1: Browser Extension Stores (Recommended)

#### Chrome Web Store
1. Visit the [Chrome Web Store](https://chrome.google.com/webstore) (link TBD)
2. Search for "YouTube Upload Date Display"
3. Click "Add to Chrome"
4. Click "Add extension" in the confirmation dialog
5. The extension icon will appear in your toolbar

#### Firefox Add-ons
1. Visit [Firefox Add-ons](https://addons.mozilla.org) (link TBD)
2. Search for "YouTube Upload Date Display"
3. Click "Add to Firefox"
4. Click "Add" in the permission dialog
5. The extension will be installed automatically

#### Edge Add-ons
1. Visit the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons) (link TBD)
2. Search for "YouTube Upload Date Display"
3. Click "Get"
4. Click "Add extension" to confirm
5. The extension icon will appear in your toolbar

#### Safari Extensions
1. Visit the Mac App Store (link TBD)
2. Search for "YouTube Upload Date Display"
3. Click "Get" to download
4. Open Safari → Preferences → Extensions
5. Enable "YouTube Upload Date Display"

---

### Method 2: Manual Installation (Development/Testing)

#### Chrome, Brave, and Edge

1. **Download the Extension**
   - Download the latest release from GitHub releases
   - Or clone the repository: `git clone [repository-url]`

2. **Prepare the Extension**
   ```bash
   # If from source code
   npm install
   npm run build:chrome  # or build:brave, build:edge
   ```

3. **Load in Browser**
   - Open Chrome/Brave/Edge
   - Navigate to `chrome://extensions/` (or `brave://extensions/`, `edge://extensions/`)
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `build/chrome` folder (or appropriate browser folder)
   - The extension should now appear in your extensions list

4. **Verify Installation**
   - Look for the extension icon in your toolbar
   - Visit any YouTube video to test functionality

#### Firefox

1. **Download the Extension**
   - Download the `.xpi` file from releases
   - Or build from source: `npm run build:firefox`

2. **Install via about:addons**
   - Open Firefox
   - Navigate to `about:addons`
   - Click the gear icon (⚙️) in the top-right
   - Select "Install Add-on From File..."
   - Choose the `.xpi` file or the `build/firefox` folder
   - Click "Add" when prompted

3. **Alternative: Temporary Installation (Development)**
   - Navigate to `about:debugging`
   - Click "This Firefox"
   - Click "Load Temporary Add-on..."
   - Select any file in the `build/firefox` folder

#### Safari

1. **Enable Developer Features**
   - Open Safari
   - Go to Safari → Preferences → Advanced
   - Check "Show Develop menu in menu bar"

2. **Install Extension**
   - Download the Safari extension package
   - Double-click the `.safariextz` file
   - Or: Safari → Preferences → Extensions → Add extension

3. **Enable the Extension**
   - Go to Safari → Preferences → Extensions
   - Find "YouTube Upload Date Display"
   - Check the box to enable it

---

## 🔧 Post-Installation Setup

### 1. First Launch
After installation, you should see the extension icon in your browser toolbar. If not:

- **Chrome/Brave/Edge**: Click the puzzle piece icon and pin the extension
- **Firefox**: Right-click the toolbar and customize to add the icon
- **Safari**: Check Safari → Preferences → Extensions

### 2. Initial Configuration
1. Click the extension icon in your toolbar
2. Configure your preferences:
   - **Position**: Choose where to display the date overlay
   - **Format**: Select relative ("2 days ago") or absolute ("Jan 15, 2024") dates
   - **Visibility**: Toggle the overlay on/off

### 3. Test the Extension
1. Visit any YouTube video (e.g., `https://youtube.com/watch?v=dQw4w9WgXcQ`)
2. Look for the upload date overlay in your chosen corner
3. Try different videos to ensure it's working correctly

---

## 🛠️ Troubleshooting

### Extension Not Showing
- **Refresh YouTube**: Try refreshing the YouTube page
- **Check Permissions**: Ensure the extension has permission to access YouTube
- **Restart Browser**: Close and reopen your browser
- **Reinstall**: Remove and reinstall the extension

### Date Not Displaying
- **Video Loading**: Wait for the video to fully load
- **YouTube Layout**: Try switching to standard YouTube view (not YouTube TV)
- **Console Errors**: Open developer tools (F12) and check for errors

### Permission Issues
- **Chrome/Edge/Brave**: Go to `chrome://extensions/`, find the extension, and ensure "Allow on all sites" is enabled
- **Firefox**: Go to `about:addons`, click the extension, and check permissions
- **Safari**: Go to Safari → Preferences → Extensions and verify permissions

### Performance Issues
- **Disable Other Extensions**: Temporarily disable other extensions to check for conflicts
- **Clear Cache**: Clear your browser cache and cookies
- **Update Browser**: Ensure you're using a supported browser version

---

## 🔄 Updating the Extension

### Automatic Updates (Store Installations)
Extensions installed from official stores will update automatically.

### Manual Updates (Development Installations)
1. Download the latest version
2. Build if necessary: `npm run build:[browser]`
3. Go to your browser's extensions page
4. Click "Reload" or remove and re-add the extension

---

## 🗑️ Uninstallation

### Chrome, Brave, Edge
1. Go to `chrome://extensions/` (or equivalent)
2. Find "YouTube Upload Date Display"
3. Click "Remove"
4. Confirm removal

### Firefox
1. Go to `about:addons`
2. Find "YouTube Upload Date Display"
3. Click the three dots menu
4. Select "Remove"

### Safari
1. Go to Safari → Preferences → Extensions
2. Find "YouTube Upload Date Display"
3. Click "Uninstall"

---

## 📞 Support

If you encounter issues during installation:

1. **Check Requirements**: Ensure your browser version is supported
2. **Read FAQ**: Check the [User Guide](USER_GUIDE.md) for common issues
3. **Report Issues**: Create an issue on GitHub with:
   - Browser and version
   - Operating system
   - Installation method used
   - Error messages (if any)
   - Screenshots (if helpful)