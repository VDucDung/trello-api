import 'dotenv/config'

export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  MONGDB_NAME: process.env.MONGDB_NAME || 'trello-db',
  APP_HOST: process.env.APP_HOST || 'localhost',
  APP_PORT: process.env.APP_PORT || 3000,

  AUTHOR: process.env.AUTHER || 'vuducdung'
}
