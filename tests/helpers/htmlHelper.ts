import { Builder, Browser, By, until, WebDriver } from "selenium-webdriver";
import { host, waitTime } from "./constants"

export let driver: WebDriver;

export async function buildDriver() {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    return driver;
}

export async function launchDriver() {
    await driver.manage().window().maximize();
    await driver.get(host);
}

export async function stopDriver() {
    await driver.quit();
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getElementById(id: string) {
    const element = await driver.wait(until.elementLocated(By.id(id)), waitTime);
    return await driver.wait(until.elementIsVisible(element), waitTime);
}

export async function getElementByXPath(xpath: string) {
    const element = await driver.wait(until.elementLocated(By.xpath(xpath)), waitTime);
    return await driver.wait(until.elementIsVisible(element), waitTime);
}

