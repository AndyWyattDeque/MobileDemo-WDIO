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
        //browserName: 'chrome',
        platformName: 'Android',
        'appium:autoGrantPermissions': true,
        'appium:autoAcceptAlerts': true,
        'appium:platformVersion': '14',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'axeuiautomator2',
        'appium:app': 'storage:filename=app-sample-debug.apk',
        'appium:appWaitActivity': '.MainActivity',
        'appium:noReset': true,
        'appium:newCommandTimeout': 60,
        'sauce:options': {
            name: "Android Driver - Testing appium2-deque-accessibility",
            appiumVersion: 'appium2-deque-accessibility',
        },
    },
];

exports.config = config;