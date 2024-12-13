import { config } from './wdio.shared.lambda.conf';

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

const ltOptions: { [key: string]: any } = {
            'platformName': 'Android',
            'deviceName': 'Pixel 7',
            'devicelog': true,
            'platformVersion': '13',
            'isRealMobile': true,
            'app': 'lt://APP1016025291733999848422736',
            'name': 'Andy Android Accessibility Test - Deque',
            'build': 'Build 1',
            'user': config.user,
            'accessKey': config.key,
            'visual': true,
            'video': true,
            'w3c': true,
            'accessibility': true,
            'appium:appWaitActivity': '.MainActivity',
            'appium:automationName': 'axeuiautomator2'
        };

config.capabilities = [{
        'lt:options': ltOptions
    }];

exports.config = config;