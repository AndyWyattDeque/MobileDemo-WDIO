import { axeSettings, axeSettings as iOSAxeSettings } from '../../configs/axe-settings';
import { browser as driver} from '@wdio/globals';
import fs from 'fs';

describe('iOS App flow', () => {
    it('should run some simple tests against the sample iOS app', async () => {
                try {
                    // This will start the accessibility scan and upload the results to Dashboard
                    iOSAxeSettings.tags.push('iOS');
                    iOSAxeSettings.scanName.replace('Deque-Store-iOS-1');
                    var results = await driver.execute('mobile: axeScan', iOSAxeSettings);
                    writeJsonToFile('Results/ios-result1.json', results);
                } finally {
                    await driver.pause(3000);
                    await driver.terminateApp('');
                    await driver.removeApp('');
                    //await driver.deleteSession();
                }
    })
})

function writeJsonToFile(filePath: string, data: any) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`JSON data written to ${filePath}`);
    } catch (error) {
      console.error(`Error writing JSON to file: ${error}`);
    }
  }