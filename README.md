### Installation.
    npm install

### Run Unit Tests.

Note: Mocka looks for a test directory
    
    npm test 
    
The full path from the command line would be: 

    ./node_modules/.bin/_mocha --compilers js:babel-register

### Run Code Coverage.
    npm run coverage 

Again, the full path from the command line would be: 

    ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --compilers js:babel-register
    
### Open index.html in a browser to view the generated coverage report.
    ./coverage/lcov-report/index.html
