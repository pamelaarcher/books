# Book Cards

## Table of content

- [Description](#description)
- [How to Run the Application](#about)
- [License](#license)
- [Demo](#demo)

## Description
This is a simple web application which pulls in book data from a JSON file and displays each book as a separate card on the browser page.

## Setting Up and Running The Application

### About
This application is made up of 3 main files
  - <b>styles.css</b> which includes the styles for the book cards
  - <b>books.html</b> which includes the linked css and js source libraries.
  - <b>books.js</b> contains the web component Book which is defined as a custom element 'ele-book'.
  - <b>main.js</b> Fetches card data from the books.json file and stores in an array.  This data is then displayed using the ele-book custom card element. One card is created for each book.

### Running the Application
 1. You can download these 4 files to a directory on your local drive.  
 2. Once installed in a directory, run an http-server from the directory and identify the ip/port number used 
 3. Open your browser and enter *ip:port*/index.html from input line
 
## License

MIT License

Copyright (c) 2022
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Demo

* [Books Demo](https://pamelaarcher.github.io/books/books.html)
