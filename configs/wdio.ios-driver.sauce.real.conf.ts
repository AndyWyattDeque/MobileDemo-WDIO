import { config } from './wdio.shared.sauce.conf';

// ==================
// Specify Test Files
// ==================
//
config.specs = ['../test/specs/**/ios-driver.spec.ts'];

// ============
// Capabilities
// ============
//
config.maxInstances = 1;
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        browserName: 'safari',
        platformName: 'ios',
        'appium:platformVersion': '17',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        'appium:app': 'storage:filename=app-sample-debug.ipa',
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        'sauce:options': {
            appiumVersion: 'appium2-deque-accessibility'
        }
    },
];

exports.config = config;