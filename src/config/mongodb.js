import { env } from './environment'
import { MongoClient, ServerApiVersion } from 'mongodb'

let trellodbInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()

  trellodbInstance = mongoClientInstance.db(env.MONGDB_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trellodbInstance) throw new Error('Must connect to database first!')
  return trellodbInstance
}
