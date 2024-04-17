import express from 'express'
import { StatusCodes } from 'http-status-codes'

import { boardRoute } from './boardRoute'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs v1 already running!' })
})

Router.use('/boards', boardRoute)

export const APIs_v1 = Router
