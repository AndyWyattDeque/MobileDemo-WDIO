declare namespace WebdriverIO {
    interface DesiredCapabilities {
        'lt:options'?: {
            platformName?: string;
            deviceName?: string;
            platformVersion?: string;
            isRealMobile?: boolean;
            app?: string;
            name?: string;
            build?: string;
            user?: string;
            accessKey?: string;
            network?: boolean;
            visual?: boolean;
            video?: boolean;
            w3c?: boolean;
            accessibility?: boolean;
            'appium:appWaitActivity'?: string;
        };
    }
}