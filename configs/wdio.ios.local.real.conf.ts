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
            'deviceName': 'iScooby15',
            'platformVersion': '17.6.1',
            'appium:udid': '00008130-00024D580C90001C',
            'orientation': 'PORTRAIT',
            'app': join(
                __dirname,
                '../',
                './apps/app-sample-debug.ipa',
            ),
            'appium:bundleId': 'com.dequesystems.axe-devtools-ios-sample-app',
            'noReset': true,
            'newCommandTimeout': 240,
        }
    }]
})
