"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axe_settings_1 = require("../../configs/axe-settings");
const globals_1 = require("@wdio/globals");
const fs_1 = __importDefault(require("fs"));
describe('iOS App flow', () => {
    it('should run some simple tests against the sample iOS app', async () => {
        try {
            // This will start the accessibility scan and upload the results to Dashboard
            axe_settings_1.axeSettings.tags.push('iOS');
            axe_settings_1.axeSettings.scanName.replace('Deque-Store-iOS-1');
            var results = await globals_1.browser.execute('mobile: axeScan', axe_settings_1.axeSettings);
            writeJsonToFile('Results/ios-result1.json', results);
        }
        finally {
            await globals_1.browser.pause(3000);
            await globals_1.browser.terminateApp('');
            await globals_1.browser.removeApp('');
            //await driver.deleteSession();
        }
    });
});
function writeJsonToFile(filePath, data) {
    try {
        fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`JSON data written to ${filePath}`);
    }
    catch (error) {
        console.error(`Error writing JSON to file: ${error}`);
    }
}
