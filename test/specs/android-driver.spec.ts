import { axeSettings as androidAxeSettings } from '../../configs/axe-settings';
import { browser as driver} from '@wdio/globals';
import fs from 'fs';

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
                androidAxeSettings.scanName.replace('Deque-Store-Android-1');
                var results = await driver.execute('mobile: axeScan', androidAxeSettings);
                writeJsonToFile('Results/android-result1.json', results);

                // click on "Next" button
                const nextButton = await driver.$('//android.widget.Button[@text="Next"]');
                await nextButton.click();
                removeTag('startXMLButton');
                androidAxeSettings.tags.push('nextButton');
                androidAxeSettings.scanName.replace('Deque-Store-Android-2');
                results = await driver.execute('mobile: axeScan', androidAxeSettings);
                writeJsonToFile('Results/android-result2.json', results);

                // click on a View with content description "Catalog"
                const catalogButton = await driver.$('//android.widget.FrameLayout[@content-desc="Catalog"]');
                await catalogButton.click();
                removeTag('nextButton');
                androidAxeSettings.scanName.replace('Deque-Store-Android-3');
                androidAxeSettings.tags.push('catalogButton');
                results = await driver.execute('mobile: axeScan', androidAxeSettings);
                writeJsonToFile('Results/android-result3.json', results);
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

function writeJsonToFile(filePath: string, data: any) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`JSON data written to ${filePath}`);
    } catch (error) {
      console.error(`Error writing JSON to file: ${error}`);
    }
  }