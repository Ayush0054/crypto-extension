import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import fetch from "node-fetch";
export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://coinmarketcap.com/currencies/ethereum/"
    );
    const html = await response.text();

    const $ = cheerio.load(html);
    const fdsa = $(
      "#__next > div.sc-faa5ca00-1.cKgcaj.global-layout-v2 > div > div.cmc-body-wrapper > div > div > div.sc-aef7b723-0.sc-a6bd470-0.gavgYW.coin-stats"
    ).text();

    console.log(fdsa);

    return NextResponse.json({ fdsa });
  } catch (error: any) {
    return NextResponse.json(
      { error: `An error occurred: ${error.message}` },
      { status: 200 }
    );
  }
}
