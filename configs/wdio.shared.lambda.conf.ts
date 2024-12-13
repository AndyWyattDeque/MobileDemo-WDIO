import {config as baseConfig} from './wdio.base.conf';
import { Options } from '@wdio/types';
import merge from 'deepmerge';

// =====================
// Lambda specific config
// =====================
export const config: WebdriverIO.Config = merge(baseConfig, {
    user: process.env.LAMBDA_USERNAME,
    key: process.env.LAMBDA_ACCESS_KEY,

// If you run your test on Sauce Labs you can specify the region you want to run your test
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.

    build: 'Deque Accessibility Build',
    name: 'Andy-Test',
    hostname: 'mobile-hub.lambdatest.com', 
    port: 80, 
    path: '/wd/hub',
    logLevel: "debug",
    coloredLogs: true,

// =============================================
// Max instances of the same device in the cloud
// =============================================
    //maxInstances: 20,

// ========
// Services
// ========
// Register LambdaTest testing services
services: [
    ['lambdatest', {
        tunnel: false,
        lambdatestOpts: {
            user: process.env.user,
            key: process.env.key,
            verbose: true,
            logFile: './logDir/api.log',
            app_upload: true,
            app: {
                app_name : "app-sample-debug.apk",
                app_path : "./apps"
            }
        }
    }]
]
});