/*  We need to have single interface for each module
*   For Front-end ng/react  l/i
*   --d       for serve dev for debug
*   --n       for node dev
*   --p       for prod build
*   For Back-end  node/mongo    n/m
*   
*   
*   For e2e
*   
*   npm start --r= ipnd / 
*/

"scripts": {
    "prestart": "echo PreStart scripts here",
    "start": "node ./common/scripts/scripts",
    "poststart": "echo PostStart scripts here"
  },

"scripts": {
    "start-mongo": "mongod --dbpath C:/f/tools/mongo/data/ --logpath C:/f/tools/mongo/logs.log --logappend --install",
    "start": "npm run debug",
    "debug": "nodemon --nolazy --inspect-brk=3010 --inspect server/config/express-server.js --config server/config/nodemon.json",
    "sb": "npm run server-build",
    "ss": "npm run server-serve",
    "sd": "npm run debug",
    "server-serve": "nodemon server/config/express-server.js --config server/config/nodemon.json",
    "server-build": "node server/config/express-server.js",
    "clear-port": "netstat -ano | findstr :30 ( means find process starting with 30 ) && taskkill /PID {give_process_here} /F",
    "dri": "webpack-dev-server --config common/build-config/index-react/wp-dev-config.js",
    "bri": "webpack --config common/build-config/index-react/wp-prod-config.js",
    "build:aot:prod": "rimraf dist/client/prod/login compiled && cross-env BUILD_AOT=1 SOURCE_MAP=0 npm run webpack -- --config common/build-config/login/webpack.prod.js --progress --profile --bail",
    "build:aot": "npm run build:aot:prod",
    "build:aot:dev": "cross-env BUILD_AOT=1 npm run build:dev",
    "build:dev": "rimraf dist/client/dev/login && npm run webpack -- --config common/build-config/login/webpack.dev.js --mode development --progress --profile --trace-deprecation",
    "build:docker": "npm run build:prod && docker build -t angular-webpack-starter:latest .",
    "build:prod": "rimraf dist && npm run webpack -- --config common/build-config/3-aot/webpack.prod.js --progress --profile --bail",
    "build": "npm run build:dev",
    "ci:aot": "cross-env BUILD_E2E=1 npm run lint && npm run test:ci && npm run build:aot && npm run e2e",
    "ci:jit": "cross-env BUILD_E2E=1 npm run lint && npm run test:ci && npm run build:prod && npm run e2e",
    "ci:nobuild": "npm run lint && npm test:ci && npm run e2e",
    "ci:testall": "cross-env BUILD_E2E=1 npm run lint && npm run test:ci && npm run build:prod && npm run e2e && npm run build:aot && npm run e2e",
    "ci:travis": "cross-env BUILD_E2E=1 npm run lint && npm run test:ci && npm run build:aot && npm run e2e:travis",
    "ci": "npm run ci:testall",
    "clean:all": "npm run rimraf -- doc coverage dist compiled webpack-cache",
    "clean:cache": "npm run rimraf -- webpack-cache",
    "clean:aot": "npm run rimraf -- compiled",
    "clean:dist": "npm run rimraf -- dist",
    "clean:install": "npm set progress=false && npm install",
    "clean": "npm cache verify && npm run rimraf -- node_modules doc coverage dist compiled webpack-cache",
    "docker": "docker",
    "docs": "npm run typedoc -- --options typedoc.json --exclude '**/*.spec.ts' ./src/",
    "docs:compodoc": "compodoc -p tsconfig.json",
    "docs:compodoc:serve": "compodoc -p tsconfig.json -s",
    "docs:compodoc:serve:watch": "compodoc -p tsconfig.json -s -w",
    "e2e:live": "npm-run-all -p -r server:prod:ci protractor:live",
    "e2e:travis": "npm-run-all -p -r server:prod:ci protractor:delay",
    "e2e": "npm-run-all -p -r server:prod:ci protractor",
    "github-deploy:dev": "npm run webpack -- --config common/build-config/3-aot/webpack.github-deploy.js --mode development --progress --profile --env.githubDev",
    "github-deploy:prod": "npm run webpack -- --config common/build-config/3-aot/webpack.github-deploy.js  --mode production --progress --profile --env.githubProd",
    "github-deploy": "npm run github-deploy:dev",
    "install-globals": "npm i -g nodemon ng static-server tsc webpack webpack-server",
    "lint": "npm run tslint \"src/**/*.ts\"",
    "node": "node",
    "postinstall": "npm run webdriver:update",
    "postversion": "git push && git push --tags",
    "preclean:install": "npm run clean",
    "preversion": "npm test",
    "protractor": "protractor",
    "protractor:delay": "sleep 3 && npm run protractor",
    "protractor:live": "protractor --elementExplorer",
    "rimraf": "rimraf",
    "server:dev:hmr": "npm run server:dev -- --hot --hotOnly",
    "server:aot:dev": "cross-env BUILD_AOT=1 npm run server:dev",
    "server:dev": "npm run webpack-dev-server -- --config common/build-config/login/webpack.dev.js --open --progress --profile --watch --content-base client/src/lib/login",
    "server:prod": "http-server dist -c-1 --cors",
    "server:prod:ci": "http-server dist -p 3000 -c-1 --cors",
    "server": "npm run server:dev",
    "start:prod:hmr": "cross-env ANGULAR_CONF_FILE=./config.prod.json npm run server:dev:hmr",
    "start:hmr": "npm run server:dev:hmr",
    "start:aot": "npm run server:aot:dev",
    "test": "karma start",
    "test:sonar": "npm run lint && cross-env SONAR_QUBE=1 karma start",
    "test:ci": "karma start --single-run --browsers ChromeTravisCi",
    "tslint": "tslint \"src/**/*.ts\" --project tsconfig.json",
    "typedoc": "typedoc",
    "version": "npm run build",
    "watch:dev:hmr": "npm run watch:dev -- --hot",
    "watch:dev": "npm run build:dev -- --watch",
    "watch:aot:dev": "npm run build:aot:dev -- --watch",
    "watch:prod": "npm run build:prod -- --watch",
    "watch:aot:prod": "npm run build:aot:prod -- --watch",
    "watch:test": "npm run test -- --auto-watch --no-single-run",
    "watch": "npm run watch:dev",
    "webdriver-manager": "node ./node_modules/protractor/bin/webdriver-manager",
    "webdriver:start": "node ./node_modules/protractor/bin/webdriver-manager start",
    "webdriver:update": "node ./node_modules/protractor/bin/webdriver-manager update",
    "webpack-dev-server": "node --max_old_space_size=4096 node_modules/webpack-dev-server/bin/webpack-dev-server.js",
    "webpack": "node --max_old_space_size=4096 node_modules/webpack/bin/webpack.js"
  },

  "scripts": {
    "prestart": "echo PreStart scripts here",
    "start": "node ./common/scripts/scripts",
    "poststart": "echo PostStart scripts here"
  },