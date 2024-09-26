import { config } from './wdio.shared.sauce.conf';

// ==================
// Specify Test Files
// ==================
//
config.specs = ['../test/specs/**/android-driver.spec.ts'];

// ============
// Capabilities
// ============
//
config.maxInstances = 1;
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        browserName: 'chrome',
        platformName: 'android',
        'appium:platformVersion': '13',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'uiAutomator2',
        'appium:app': 'storage:filename=app-sample-debug.apk',
        'appium:appWaitActivity': '.MainActivity',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;