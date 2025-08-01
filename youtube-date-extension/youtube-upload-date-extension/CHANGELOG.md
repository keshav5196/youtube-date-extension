# Changelog

All notable changes to the YouTube Upload Date Display Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Content freshness indicators with color coding
- Playlist context showing adjacent video dates
- Keyboard shortcuts for quick toggling
- Export functionality for viewing history

## [1.0.0] - TBD

### Added
- Initial release of YouTube Upload Date Display Extension
- Upload date overlay display in video corner
- Cross-browser support (Chrome, Firefox, Edge, Brave, Safari)
- Customizable overlay positioning (4 corners)
- Multiple date format options (relative/absolute)
- Non-intrusive design that doesn't block video controls
- Settings popup for quick configuration
- Options page for detailed preferences
- Smart YouTube navigation detection
- Performance optimized for minimal impact

### Features
- **Core Functionality**
  - Real-time upload date detection on YouTube videos
  - Automatic overlay positioning without interfering with controls
  - Support for YouTube's single-page app navigation
  - Robust date parsing from YouTube's metadata

- **User Customization**
  - Toggle overlay visibility on/off
  - Choose from 4 corner positions (top-left, top-right, bottom-left, bottom-right)
  - Switch between relative dates ("2 days ago") and absolute dates ("Jan 15, 2024")
  - Adjust overlay opacity and text size

- **Browser Compatibility**
  - Chrome (Manifest V3)
  - Firefox (WebExtensions)
  - Edge (Chromium-based)
  - Brave (Chromium-based)
  - Safari (Safari Web Extensions)

- **Performance & Reliability**
  - Minimal DOM manipulation impact
  - Efficient event listeners with proper cleanup
  - Memory leak prevention
  - Graceful error handling

### Technical Implementation
- Manifest V3 compliance for modern browsers
- Content scripts for YouTube page interaction
- Service worker for extension lifecycle management
- Local storage for user preferences
- Cross-browser compatibility layer

---

## Version History Guidelines

### Types of Changes
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes

### Version Numbering
- **Major** (X.0.0): Breaking changes or significant new features
- **Minor** (1.X.0): New features, backward compatible
- **Patch** (1.0.X): Bug fixes, backward compatible