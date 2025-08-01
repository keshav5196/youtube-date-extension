# YouTube Upload Date Display Extension

A cross-browser extension that displays the upload date of YouTube videos in a non-intrusive corner overlay, helping you make informed viewing decisions.

## 🎯 Features

- **Upload Date Display**: Shows video upload date in a corner overlay
- **Cross-Browser Support**: Compatible with Chrome, Firefox, Edge, Brave, and Safari
- **Non-Intrusive Design**: Subtle overlay that doesn't interfere with video controls
- **Customizable Positioning**: Choose from 4 corner positions
- **Multiple Date Formats**: Relative (2 days ago) or absolute (Jan 15, 2024) formats
- **Smart Detection**: Works with YouTube's single-page app navigation
- **Performance Optimized**: Minimal impact on YouTube's performance

## 📦 Installation

### Chrome / Brave / Edge
1. Download the latest release from the releases page
2. Open Chrome/Brave/Edge and navigate to `chrome://extensions/` (or `brave://extensions/`, `edge://extensions/`)
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon should appear in your toolbar

### Firefox
1. Download the Firefox (.xpi) version from releases
2. Open Firefox and navigate to `about:addons`
3. Click the gear icon and select "Install Add-on From File"
4. Choose the downloaded .xpi file
5. Click "Add" when prompted

### Safari
1. Download the Safari version from releases
2. Open Safari and go to Safari → Preferences → Extensions
3. Enable "Allow unsigned extensions" in Developer menu (if needed)
4. Install the extension package

## 🚀 Quick Start

1. **Install** the extension following the instructions above
2. **Visit** any YouTube video page
3. **Look** for the upload date in the top-right corner of the video
4. **Click** the extension icon to customize settings

## ⚙️ Configuration

Click the extension icon in your browser toolbar to access:

- **Position**: Choose overlay position (top-left, top-right, bottom-left, bottom-right)
- **Date Format**: Toggle between relative and absolute date formats
- **Visibility**: Enable/disable the overlay
- **Styling**: Adjust opacity and text size

## 🔧 Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-upload-date-extension.git
cd youtube-upload-date-extension

# Install dependencies
npm install

# Build for development
npm run build:dev

# Build for specific browser
npm run build:chrome
npm run build:firefox
npm run build:safari
```

### Testing
```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run tests for specific browser
npm run test:chrome
npm run test:firefox
```

## 📁 Project Structure

```
src/
├── content/          # Content scripts for YouTube integration
├── background/       # Background service worker
├── popup/           # Extension popup interface
├── options/         # Settings page
├── utils/           # Utility functions
└── assets/          # Icons and CSS files
```

## 🌐 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome  | ✅ Full | Manifest V3 |
| Firefox | ✅ Full | Manifest V3 compatible |
| Edge    | ✅ Full | Chromium-based |
| Brave   | ✅ Full | Chromium-based |
| Safari  | ✅ Full | Safari Web Extensions |

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

Found a bug? Please create an issue with:
- Browser and version
- Extension version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 🆘 Support

- 📖 Check the [User Guide](docs/USER_GUIDE.md)
- 💬 Open an issue for bugs or feature requests
- 📧 Contact: [your-email@example.com]

## 📊 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and updates.

## 🙏 Acknowledgments

- YouTube for providing a great platform to enhance
- The open-source community for inspiration and tools
- All contributors and users who make this project better

---

**Made with ❤️ for better YouTube browsing**