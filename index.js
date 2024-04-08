import {crawlPage} from "./crawl.js";
import {printReport} from "./report.js";

async function main() {
  if (process.argv.length < 3) {
    console.log(
      "No website provided. Please provide a website URL as a command-line argument.",
    );
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log(
      "Too many arguments provided. Please provide a only a website URL as a command-line argument.",
    );
    process.exit(1);
  }

  const baseURL = process.argv[2];

  // Check if the provided URL is valid
  if (!isValidURL(baseURL)) {
    console.log("Invalid URL provided.");
    process.exit(1);
  }

  console.log(`starting crawl of: ${baseURL}...`);

  const pages = await crawlPage(baseURL, baseURL, {});

  printReport(pages);
}

function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch (error) {
    return false;
  }
}

main();
