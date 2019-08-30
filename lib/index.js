
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ts-lib.cjs.production.min.js')
} else {
  module.exports = require('./ts-lib.cjs.development.js')
}
