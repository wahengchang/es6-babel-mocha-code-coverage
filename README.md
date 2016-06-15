### Installation.
    npm install

### Run Unit Tests.

Note: Mocka looks for a test directory

    ./node_modules/.bin/_mocha --compilers js:babel-register

### Run Code Coverage.
    ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --compilers js:babel-register
    
### Open index.html in a browser to view the coverage report.
    ./coverage/lcov-report/index.html
