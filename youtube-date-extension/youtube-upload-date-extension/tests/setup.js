// tests/setup.js

// This file can be used to set up a testing environment.
// For example, you can mock browser APIs here.

global.chrome = {
    storage: {
        sync: {
            get: jest.fn((keys, callback) => callback({})),
            set: jest.fn((items, callback) => callback()),
        },
    },
};
