youtube-upload-date-extension/
├── manifest.json                 # Extension manifest (Manifest V3)
├── README.md                    # Project documentation
├── CHANGELOG.md                 # Version history
├── LICENSE                      # License file
├── package.json                 # Development dependencies
├── .gitignore                   # Git ignore rules
├── src/                         # Source code
│   ├── content/                 # Content scripts
│   │   ├── youtube-detector.js  # Main content script
│   │   └── overlay-manager.js   # Overlay creation and management
│   ├── background/              # Background scripts
│   │   └── service-worker.js    # Service worker (Manifest V3)
│   ├── popup/                   # Extension popup
│   │   ├── popup.html          # Popup interface
│   │   ├── popup.js            # Popup logic
│   │   └── popup.css           # Popup styling
│   ├── options/                 # Options/Settings page
│   │   ├── options.html        # Settings interface
│   │   ├── options.js          # Settings logic
│   │   └── options.css         # Settings styling
│   └── utils/                   # Utility functions
│       ├── date-formatter.js   # Date formatting utilities
│       ├── storage-manager.js  # Extension storage management
│       └── youtube-parser.js   # YouTube-specific parsing
├── assets/                      # Static assets
│   ├── icons/                  # Extension icons
│   │   ├── icon16.png          # 16x16 icon
│   │   ├── icon32.png          # 32x32 icon
│   │   ├── icon48.png          # 48x48 icon
│   │   └── icon128.png         # 128x128 icon
│   └── css/                    # Shared CSS files
│       └── overlay.css         # Overlay styling
├── docs/                       # Documentation
│   ├── INSTALLATION.md         # Installation guide
│   ├── USER_GUIDE.md          # User guide
│   ├── API.md                 # API documentation
│   └── CONTRIBUTING.md        # Contribution guidelines
├── tests/                      # Test files
│   ├── unit/                   # Unit tests
│   └── integration/            # Integration tests
├── browser-specific/           # Browser-specific configurations
│   ├── chrome/                 # Chrome-specific files
│   ├── firefox/                # Firefox-specific files
│   ├── edge/                   # Edge-specific files
│   ├── brave/                  # Brave-specific files (if needed)
│   └── safari/                 # Safari-specific files
└── build/                      # Build output (gitignored)
    ├── chrome/                 # Chrome build
    ├── firefox/                # Firefox build
    ├── edge/                   # Edge build
    ├── brave/                  # Brave build
    └── safari/                 # Safari build