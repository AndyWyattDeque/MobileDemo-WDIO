// wdio.ios.local.emu.conf.ts
import {config as baseConfig } from './wdio.shared.local.appium.conf';
import merge from 'deepmerge';
import {join} from 'path';

export const config: WebdriverIO.Config = merge(baseConfig, {
    specs: [
        '../test/specs/ios-driver.spec.ts'
    ],
    runner: 'local',
    maxInstances: 1,
    capabilities: [{
        platformName: 'iOS',
        'appium:options': {
            'automationName': 'AxeXCUITest',
            //'deviceName': 'iPhone 15 Pro',
            //'platformVersion': '18',
            //'appium:udid': 'C958039D-015F-48DE-9D14-78FB09E037B4',
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
