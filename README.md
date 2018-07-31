# Feed Reader Testing

## About
This is the 5th Project created under Udacity's Front-End Web Developer Nanodegree. The task was to create a _Feed Reader Testing_, by implementing an unit testing using the Jasmine Library.

## First Run
* Clone the repository `$ git clone https://github.com/paulboulescu/frontend-nanodegree-feedreader-master.git`
* Open `index.html` with a browser
* Scroll down until you see the 'Jasmine' section
* Check each item inside the list

## Description
This test unit is composed of 4 suits, each one containing one or more tests. Each test checks that specific functionalities are working correctly. The _green_ colour represents a passed test. The _red_ colour represents a failed test.

## Features
* **RSS Feeds**
  * _are defined_ - Checks if the variable is defined and if its length is not 0
  * _have url_ - Checks if each of the allFeed entries has an URL and if its URL length is not 0
  * _have name_ - Checks if each of the allFeed entries has a name and if its name length is not 0
* **The menu**
  * _is hidden by default_ - Checks if the _Menu_ is hidden when the app is initially displayed
  * _changes visibility when icon is clicked_ - Checks if the _Menu_ switches between visible and invisible after subsequent clicks over the _Menu Icon_
* **Initial Entries**
  * _are loaded_ - Checks if the number of entries displayed after a feed was loaded is different than 0
* **New Feed Selection**
  * _changes content_ - Checks if loading feeds from different categories displays different content

## Internal Dependencies
* _index.html_ - stores the HTML
* _css/*_ - stores the CSS files
* _fonts/*_ - stores font resources
* _jasmine/lib/*_ - stores the Jasmine library
* _jasmine/spec/feedreader.js_ - stores the Jasmine unit testing
* _js/*_ - stores the JavaScript files
* _.gitattributes_ - sets the default behavior, in case people don't have `core.autocrlf set. \# https://help.github.com/articles/dealing-with-line-endings/ * text=auto`
* _CONTRIBUTING.md_ - guideline for contributing to this project
* _README.md_ - this current document

## External Dependencies
* [Jasmine Library](https://jasmine.github.io/) is used, but all dependencies are included in the project.

## Known Issues
There aren't any known issues.

## Use Example
The project can be used as it is, for learning purposes, or to develop other similar projects, based on its current functionalities.

## License
**MIT License**
Copyright (c) 2018 Paul Boulescu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing
For details about contributing, please check out [CONTRIBUTING.md](CONTRIBUTING.md).