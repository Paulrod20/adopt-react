import { buildDriver, launchDriver, stopDriver, driver, sleep } from "../helpers/htmlHelper";

async function runTests() {
    try {
        //Setup
        await buildDriver();
        await launchDriver();
        console.log("Driver launched and navigated to Adopt");

        await sleep(2000); // Wait for 2 seconds to ensure page loads

         //test: Page Loaded
        const title = await driver.getTitle();
        console.log(`Page title: ${title}`);

        await sleep(1000); // Wait for 1 second

        console.log("\nAll tests passed.");
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await stopDriver();
    }
}

runTests();