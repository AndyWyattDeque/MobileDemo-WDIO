"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axe_settings_1 = require("../../configs/axe-settings");
const globals_1 = require("@wdio/globals");
const fs_1 = __importDefault(require("fs"));
describe('Android App flow', () => {
    it('should run some simple tests against the sample Android app', async () => {
        try {
            await globals_1.browser.pause(3000);
            //setup additional tags for use in the dashboard
            axe_settings_1.axeSettings.tags.push('Android');
            // click on "Start XML" button with text
            const startXMLButton = await $('//android.widget.Button[@text="Start XML"]');
            await startXMLButton.click();
            axe_settings_1.axeSettings.tags.push('startXMLButton');
            axe_settings_1.axeSettings.scanName.replace('Deque-Store-Android-1');
            var results = await globals_1.browser.execute('mobile: axeScan', axe_settings_1.axeSettings);
            writeJsonToFile('Results/android-result1.json', results);
            // click on "Next" button
            const nextButton = await globals_1.browser.$('//android.widget.Button[@text="Next"]');
            await nextButton.click();
            removeTag('startXMLButton');
            axe_settings_1.axeSettings.tags.push('nextButton');
            axe_settings_1.axeSettings.scanName.replace('Deque-Store-Android-2');
            results = await globals_1.browser.execute('mobile: axeScan', axe_settings_1.axeSettings);
            writeJsonToFile('Results/android-result2.json', results);
            // click on a View with content description "Catalog"
            const catalogButton = await globals_1.browser.$('//android.widget.FrameLayout[@content-desc="Catalog"]');
            await catalogButton.click();
            removeTag('nextButton');
            axe_settings_1.axeSettings.scanName.replace('Deque-Store-Android-3');
            axe_settings_1.axeSettings.tags.push('catalogButton');
            results = await globals_1.browser.execute('mobile: axeScan', axe_settings_1.axeSettings);
            writeJsonToFile('Results/android-result3.json', results);
        }
        finally {
            await globals_1.browser.pause(3000);
            await globals_1.browser.terminateApp('com.deque.mobile.axedevtoolssampleapp');
            await globals_1.browser.removeApp('com.deque.mobile.axedevtoolssampleapp');
            //await driver.deleteSession();
        }
    });
});
function removeTag(tag) {
    const index = axe_settings_1.axeSettings.tags.indexOf(tag);
    if (index !== -1) {
        axe_settings_1.axeSettings.tags.splice(index, 1);
    }
}
function writeJsonToFile(filePath, data) {
    try {
        fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`JSON data written to ${filePath}`);
    }
    catch (error) {
        console.error(`Error writing JSON to file: ${error}`);
    }
}
