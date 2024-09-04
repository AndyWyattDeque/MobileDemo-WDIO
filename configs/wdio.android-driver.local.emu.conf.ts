// wdio.android.local.emu.conf.ts
import {join} from 'path';
import {config as baseConfig } from './wdio.shared.local.appium.conf';
import merge from 'deepmerge';

export const config: WebdriverIO.Config = merge(baseConfig, {
    specs: [
        '../test/specs/**/android-driver.spec.ts'
    ],
    runner: 'local',
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:options': {
            'automationName': 'AxeUiAutomator2',
            'deviceName': 'emulator-5554',
            'orientation': 'PORTRAIT',
            'app': join(
                __dirname,
                '../',
                './apps/app-sample-debug.apk',
            ),
            'appWaitActivity': '.MainActivity',
            'appPackage': 'com.deque.mobile.axedevtoolssampleapp',
            'noReset': true,
            'newCommandTimeout': 240,
        }
    }]
})
