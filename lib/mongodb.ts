import { MongoClient , ServerApiVersion } from "mongodb";

if(!process.env.MONGODB_URL){
    throw new Error('Invalid/Missing environment variable: "MONGOD_URI"')
}

const uri = process.env.MONGODB_URL
const options = {
    serverApi:{
        version: ServerApiVersion.v1    ,
        strict: true,
        deprecationError: true
    }
}

let client : MongoClient; //mongodb client

if (process.env.NODE_ENV === "development") {
    let globalWithMongo = global as typeof globalThis & {
      _mongoClient?: MongoClient
    }
   
    if (!globalWithMongo._mongoClient) {
      globalWithMongo._mongoClient = new MongoClient(uri, options)
    }
    client = globalWithMongo._mongoClient
  } else {
    client = new MongoClient(uri, options)
  }

export default client;