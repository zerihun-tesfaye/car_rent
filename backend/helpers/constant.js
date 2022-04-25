import dotenv from 'dotenv'

dotenv.config()
export const {
   PORT,
   MongoURL,
   JWTSecretKey,
   JWTExpiresIn
  } = process.env;

