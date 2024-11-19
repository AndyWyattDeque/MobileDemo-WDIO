// wdio.ios.local.emu.conf.ts
import {config as baseConfig } from './wdio.shared.local.appium.conf';
import merge from 'deepmerge';
import {join} from 'path';

export const config: WebdriverIO.Config = merge(baseConfig, {
    specs: [
        '../test/specs/ios.spec.ts'
    ],
    runner: 'local',
    maxInstances: 1,
    capabilities: [{
        platformName: 'iOS',
        'appium:options': {
            'automationName': 'XCUITest',
            'deviceName': 'iPhone 16 Pro',
            'platformVersion': '18.0',
            'appium:udid': 'AB506E1C-DA6B-49EE-B636-EB8F2E1B5BC6',
            'orientation': 'PORTRAIT',
            'app': join(
                __dirname,
                '../',
                './apps/axe-devtools-ios-sample-app.app',
            ),
            'appium:bundleId': 'com.dequesystems.axe-devtools-ios-sample-app',
            'noReset': true,
            'newCommandTimeout': 240,
        }
    }]
})
