# Web Scraper

This repository contains a simple web scraper implemented in JavaScript. The scraper is capable of crawling a website starting from a provided URL, extracting internal links, and generating a report based on the frequency of occurrence of each internal link.

## Files

- **main.js**: This file contains the main logic of the web scraper. It takes a website URL as a command-line argument, crawls the website, and generates a report.
- **crawl.js**: This file contains functions related to crawling web pages, fetching HTML content, and extracting URLs from HTML.
- **report.js**: This file contains functions for generating and printing a report based on the crawled data.
- **jsonfile**: This file contains metadata about the project, including its name, description, dependencies, and scripts for running tests and the application.

## Installation

1. Clone the repository:

```
git clone https://github.com/mondragon-ai/scraper.git
```

## Usage

To start the web scraper, run the following command:

```
npm start <website_url>
```

Replace <website_url> with the URL of the website you want to scrape.

## Testing

Unit tests are provided for the crawl.js and report.js files using Jest. To run the tests, use the following command:

```
npm test
```

## Contribution

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

Author: Angel Mondragon
GitHub: [mondragon--ai](https://github.com/mondragon-ai/)
