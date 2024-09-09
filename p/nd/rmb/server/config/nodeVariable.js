const path = require('path');
const rootPath = path.resolve(__dirname, "../../");
const nodeVar = {
  db: {
    enable: false,
    name: "rmb",
    port: 27017,
    mysqlPort: 33060,
    mysqlHost: "0.0.0.0",
    mysqlUser: "root",
    mysqlPass: "password",
    mysqlPooling: true,
    mysqlMaxPoolSize: 10,
    host: "127.0.0.1",
    system: "mongo", // mongo, mysql
    user: "u2",
    pwd: "pwd2"
  },
  serverSecret: "my_serverSecret_pass_phrase_1",
  serverInfraModulesPath: "modules/",
  serverInfraServicesPath: "infra/services/",
  serverClientModulesPath: "client/modules/",
  serverClientServicesPath: "client/services/",
  serverFsDbPath: "infra/data/db/fs/",
  serverCsvDbPath: "infra/data/db/csv/",
  clientPresentation: "client/src/lib/",
  rootNmPath: "node_modules",
  distDev: "/dist/client/dev/",
  distProd: "/dist/client/prod/",
}
module.exports = {
  common: {
    clientPresentation: nodeVar.clientPresentation,
    // path: path,
    rootNmPath: nodeVar.rootNmPath,
    rootPath: rootPath,
    serverInfraModulesPath: nodeVar.serverInfraModulesPath,
    serverInfraServicesPath: nodeVar.serverInfraServicesPath,
    serverClientModulesPath: nodeVar.serverClientModulesPath,
    serverClientServicesPath: nodeVar.serverClientServicesPath,
    // staticAssetsPath: rootPath + "/server/static/",
    staticAssetsPath: nodeVar.distProd,
    viewEngine: "ejs",
    viewPath: nodeVar.distProd,
  },
  modules: {
    index: {
      routePath: nodeVar.serverClientModulesPath + "index" + "/route",
      routeCookieOptions: {
        maxAge: 1000 * 60 * 5, // would expire after 5 minutes
        httpOnly: false, // The cookie only accessible by the web server
        // signed: true // Indicates if the cookie should be signed
      }
    },
    test: {
      routePath: nodeVar.serverInfraModulesPath + "test" + "/route",
    },
    user: {
      routePath: nodeVar.serverClientModulesPath + "user" + "/route",
      ngAppPath: nodeVar.clientPresentation + "user/index.js"
    },
    protectedRoute: {
      routePath: nodeVar.serverClientModulesPath + "protectedRoute" + "/route"
    },
    crudFile: {
      routePath: nodeVar.serverInfraModulesPath + "crud/fs" + "/route"
    },
    crudDb: {
      userSession: false,
      name: nodeVar.db.name,
      user: nodeVar.db.user,
      pwd: nodeVar.db.pwd,
      currentDbSystem: nodeVar.db.system,
      host: nodeVar.db.host,
      port: nodeVar.db.port,
      mdb: {
        url: "mongodb://" + nodeVar.db.domain + ":" + nodeVar.db.port,
        urlDb: "mongodb://" + nodeVar.db.domain + ":" + nodeVar.db.port + "/" + nodeVar.db.name,
        dataPath: "C:/f/tools/mongo/data/",
        logsPath: "C:/f/tools/mongo/logs.log",
        routePathT1: nodeVar.serverInfraModulesPath + "crud/mDb/t1" + "/route",
        routePathT2: nodeVar.serverInfraModulesPath + "crud/mDb/t2" + "/route",
        routePath: nodeVar.serverInfraModulesPath + "crud/mDb" + "/route",
      },
      ms: {
        routePathT1: nodeVar.serverInfraModulesPath + "crud/msDb/t1" + "/route",
        routePathT2: nodeVar.serverInfraModulesPath + "crud/msDb/t2" + "/route"
      }
    },
    errorPages: {
      routePath: nodeVar.serverInfraModulesPath + "errorPages" + "/route"
    },
    childProcess: {
      routePath: nodeVar.serverInfraModulesPath + "childProcess" + "/route"
    }
  },
  db: {
    config:{
      enable: nodeVar.db.enable,
      ms: {
        host: nodeVar.db.mysqlHost,
        port: nodeVar.db.mysqlPort,
        user: nodeVar.db.mysqlUser,
        pass: nodeVar.db.mysqlPass,
        dbName: nodeVar.db.name,
        pooling: nodeVar.db.mysqlPooling,
        poolMaxSize: nodeVar.db.mysqlMaxPoolSize
      }
    },
    cookie: {
      secret: 'secret'
    },
    session: {
      fsPath: nodeVar.serverFsDbPath + 'session.json',
      jwt: {
        secret: 'jwtSecret',
        algorithm: 'RS256',
        privateKey: 'MIGpAgEAAiBZyefzJMmlpfIc4zSy+fN6NErmDET6dsm5vHBZi5etVwIDAQABAiADJftGIVIYxtrYfHcKl40b/xtl3bETD2jZSY7oErpRsQIRALDCxNbqQfjjEFScJ62IHF0CEQCCCiNQp4D1x2RKnsNl7TVDAhA+5vDZcj/L7DHxiihsjpVZAhBLEqU+q+U0fy80MSHnVyFXAhEAiWLiNDvybZzWgW/oHHzzdQ==',
        publicKey: 'MDswDQYJKoZIhvcNAQEBBQADKgAwJwIgWcnn8yTJpaXyHOM0svnzejRK5gxE+nbJubxwWYuXrVcCAwEAAQ==',
        tokenExpiresIn: "7d"    // seconds, 60, "10h", "7d"
      }
    },
    users: {
      serverSecret: nodeVar.serverSecret,
      fsPath: rootPath + '/server/' + nodeVar.serverFsDbPath + 'users.json',
      csvPath: nodeVar.serverCsvDbPath + 'users.csv',
      csvInfoPath: nodeVar.serverCsvDbPath + 'userInfo.csv',
      csvRelationPath: nodeVar.serverCsvDbPath + 'userRelation.csv',
    },
    posts: {
      fsPath: nodeVar.serverFsDbPath + 'posts.json',
      csvPath: nodeVar.serverCsvDbPath + 'posts.csv',
      collectionName: "posts"
    },
    auth: {
      fsPath: nodeVar.serverFsDbPath + 'auth.json',
    },
    test: {
      resetDataThresHold: 1,
      fsPath1: nodeVar.serverFsDbPath + 'sample-big-data.json',
      fsPath2: nodeVar.serverFsDbPath + 'sample-mid-data.json',
    }
  },
  tools: {
    express: require('express'),
    browserSync: require('browser-sync'),
    bodyParser: require('body-parser'),
    cookieParser: require('cookie-parser'),
    csvParse: require('csv-parse'),
    debug: require('debug'),
    duplex: require('stream').Duplex,
    fastCsv: require('fast-csv'),
    fs: require('fs'),
    mongoDb: require('mongodb'),
    mongoClient: require('mongodb').MongoClient,
    promisify: require('util').promisify,
    readableStream: require('stream').Readable,
    through2: require('through2'),
    url: require('url'),
    writeableStream: require('stream').Writable
  },
  errorHandler: {
    default: (err, res, req, next) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      })
    },
    dev: (err, res, req, next) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      })
    },
    404: (res, req, next) => {
      let err = new Error('404');
      err.status = 404;
      next(err);
    },
  }
}