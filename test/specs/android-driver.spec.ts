import { axeSettings as androidAxeSettings } from '../../configs/axe-settings';
import { browser as driver} from '@wdio/globals';

describe('Android App flow', () => {
    it('should run some simple tests against the sample Android app',
        async () => {
            try {
                await driver.pause(3000);

                //setup additional tags for use in the dashboard
                androidAxeSettings.tags.push('Android');

                // click on "Start XML" button with text
                const startXMLButton = await $('//android.widget.Button[@text="Start XML"]');
                await startXMLButton.click();
                androidAxeSettings.tags.push('startXMLButton');
                await driver.execute('mobile: axeScan', androidAxeSettings);

                // click on "Next" button
                const nextButton = await driver.$('//android.widget.Button[@text="Next"]');
                await nextButton.click();
                removeTag('startXMLButton');
                androidAxeSettings.tags.push('nextButton');
                await driver.execute('mobile: axeScan', androidAxeSettings);

                // click on a View with content description "Catalog"
                const catalogButton = await driver.$('//android.widget.FrameLayout[@content-desc="Catalog"]');
                await catalogButton.click();
                removeTag('nextButton');
                androidAxeSettings.tags.push('catalogButton');
                await driver.execute('mobile: axeScan', androidAxeSettings);
            } finally {
                await driver.pause(3000);
                await driver.terminateApp('com.deque.mobile.axedevtoolssampleapp');
                await driver.removeApp('com.deque.mobile.axedevtoolssampleapp');
                //await driver.deleteSession();
            }
        })
    })

function removeTag(tag: string): void {
    const index = androidAxeSettings.tags.indexOf(tag);
    if (index !== -1) {
        androidAxeSettings.tags.splice(index, 1);
    }
}
