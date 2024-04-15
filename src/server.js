/* eslint-disable no-console */
import express from 'express'
import exitHook from 'async-exit-hook'

import { env } from './config/environment'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'

const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(() => {
    CLOSE_DB()
  })
}

CONNECT_DB()
  .then(() => { console.log('Connected to database!'); })
  .then(() => { START_SERVER() })
  .catch(err => {
    console.log(err)
    process.exit(0)
  })
