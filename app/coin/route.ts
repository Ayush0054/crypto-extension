import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
  let browser;

  try {
    // browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto("https://coinmarketcap.com");
    // // await page.type("#twotabsearchtextbox", userSearch);
    // // await page.keyboard.press("Enter");
    // // await page.waitForNavigation();
    // await page.waitForSelector(
    //   "#section-coin-overview > div.sc-f70bb44c-0.flfGQp.flexStart.alignBaseline > span"
    // );
    // const html = await page.content(); //get the entire html content
    const html = await fetch("https://coinmarketcap.com");
    const htmlString = await html.text();
    const $ = cheerio.load(htmlString); //load the html content

    // const prices = $(
    //   "#section-coin-overview > div.sc-f70bb44c-0.flfGQp.flexStart.alignBaseline > span"
    // ).text();
    // console.log(prices);

    //   .map((index, element) => {
    //     return $(element).text();
    //   })
    //   .get();

    return NextResponse.json({ htmlString });
  } catch (error: any) {
    return NextResponse.json(
      { error: `An error occurred: ${error.message}` },
      { status: 200 }
    );
  }
  //    finally {
  //     if (browser) {
  //       await browser.close();
  //     }
  //   }
}
