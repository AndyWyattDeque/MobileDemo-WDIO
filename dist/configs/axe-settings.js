"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axeSettings = void 0;
exports.axeSettings = {
    apiKey: process.env.AXE_MOBILE_API_KEY, // axe API key, required by axe DevTools Mobile
    //axeServiceUrl: 'https://mobile-dev.dequelabs.com',
    tags: ['mobile', 'accessibility', 'smoke'],
    scanName: 'Appium Driver Scan'
};
