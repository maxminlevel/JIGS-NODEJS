const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const xss = require('xss-clean')
const cors = require('cors')
const path = require('path')
const glob = require('glob')
const _ = require('lodash')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const express_handlebars_sections = require('express-handlebars-sections')
const handlebars = require('handlebars')
const {assignObjOnce} = require('./helpers/object')
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access')
const i18n = require('i18n')

const initMidlewareBef = (ctx) => {
  const {app} = ctx
  const whitelist =
    '127.0.0.1' && ctx.config.ACCESS_CONTROL_ALLOW_ORIGIN.split(',')
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin) callback(null, true)
      else if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'), false)
      }
    },
    credentials: true,
  }
  app.use(cors(corsOptions))
  app.use(morgan('tiny'))
  app.use(helmet())
  app.use(xss())
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
  app.set('etag', false)
}

const initMidlewareAft = (ctx) => {
  const {app} = ctx
  app.use(function (req, res, next) {
    res.status(404)

    // respond with html page
    // respond with json
    if (req.accepts('json')) {
      res.json({error: 'Not found'})
      return
    }

    // default to plain-text. send()
    res.type('txt').send('Not found')
  })
}

const initRoutes = (ctx) => {
  const {app, config} = ctx
  const routePath = path.resolve(__dirname, 'routes')
  const priorityRouters = glob.sync(path.join(routePath, '**/index.js'), {
    dot: true,
  })
  const routers = glob.sync(path.join(routePath, '**/*.route.js'), {
    dot: true,
  })
  const view = glob.sync(path.join(routePath, '**/*.view.js'), {
    dot: true,
  })
  const orderedPriorityRouters = _.sortBy(
    priorityRouters,
    (filePath) => _.split(filePath, '/').length
  )
  const constructAPI = (files, prefix = '', regex = /(^index$)|(\.route$)/) => {
    _.each(files, (filePath) => {
      const router = require(filePath)
      const {dir: routerDir, name: routerName} = path.parse(filePath)
      const subPath = _.replace(routerName, regex, '')
      const fullPath = path.join(routerDir, subPath)
      const rootPath = path.join('/', path.relative(routePath, fullPath))

      _.each(router.stack, (layer) => {
        if (rootPath != '/') {
          console.log(`-> api: ${prefix + rootPath}` + layer.route.path.trim())
        } else {
          console.log(`-> api: ` + layer.route.path.trim())
        }
      })
      app.use(prefix + rootPath, router)
    })
  }
  constructAPI(
    [...orderedPriorityRouters, ...routers],
    '/api/' + config.API_VERSION
  )
  constructAPI([...view], '', /(^index$)|(\.view$)/)
}

const initEngineView = (ctx) => {
  const {app} = ctx
  const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    handlebars: allowInsecurePrototypeAccess(handlebars),
    helpers: {
      section: express_handlebars_sections(),
      ifCond: function (v1, operator, v2, options) {
        switch (operator) {
          case '==':
            return v1 == v2 ? options.fn(this) : options.inverse(this)
          case '===':
            return v1 === v2 ? options.fn(this) : options.inverse(this)
          case '!=':
            return v1 != v2 ? options.fn(this) : options.inverse(this)
          case '!==':
            return v1 !== v2 ? options.fn(this) : options.inverse(this)
          case '<':
            return v1 < v2 ? options.fn(this) : options.inverse(this)
          case '<=':
            return v1 <= v2 ? options.fn(this) : options.inverse(this)
          case '>':
            return v1 > v2 ? options.fn(this) : options.inverse(this)
          case '>=':
            return v1 >= v2 ? options.fn(this) : options.inverse(this)
          case '&&':
            return v1 && v2 ? options.fn(this) : options.inverse(this)
          case '||':
            return v1 || v2 ? options.fn(this) : options.inverse(this)
          default:
            return options.inverse(this)
        }
      },
      __: function () {
        return i18n.__.apply(this, arguments)
      },
      __n: function () {
        return i18n.__n.apply(this, arguments)
      },
    },
  })

  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))
  app.use(express.static(path.join(__dirname, './public')))

  i18n.configure({
    locales: ['vi', 'en'],
    fallbacks: {en: 'vi'},
    defaultLocale: 'vi',
    cookie: 'locale',
    queryParameter: 'lang',
    directory: __dirname + '/public/locales',
    directoryPermissions: '755',
    autoReload: true,
    updateFiles: true,
    api: {
      __: '__', //now req.__ becomes req.__
      __n: '__n', //and req.__n can be called as req.__n
    },
  })
  app.use(i18n.init)
}

const init = async (ctx) => {
  const app = express()
  return {app}
}

const start = async (ctx) => {
  const {config, instances} = ctx
  const {app} = instances

  const apiContext = assignObjOnce(
    {},
    {
      ...instances,
      app,
      config,
      instances,
    }
  )
  initMidlewareBef(apiContext)
  initEngineView(apiContext)
  initRoutes(apiContext)
  initMidlewareAft(apiContext)

  const port = ctx.config.SERVER_PORT || 3000
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
  })
  return {app}
}

module.exports = {
  init,
  start,
}
