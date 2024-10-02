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
            'platformVersion': '18.0',
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
