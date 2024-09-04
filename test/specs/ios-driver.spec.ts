import { axeSettings, axeSettings as iOSAxeSettings } from '../../configs/axe-settings';
import { browser as driver} from '@wdio/globals';

describe('iOS App flow', () => {
    it('should run some simple tests against the sample iOS app', async () => {
                try {
                    // This will start the accessibility scan and upload the results to Dashboard
                    iOSAxeSettings.tags.push('iOS');
                    const result = await driver.execute('mobile: axeScan', iOSAxeSettings);
                } finally {
                    await driver.pause(3000);
                    await driver.terminateApp('');
                    await driver.removeApp('');
                    //await driver.deleteSession();
                }
    })
})