import { MongoClient } from "mongodb";

let db;
//cb = callback
async function connectToDb(cb) {
  const client = new MongoClient("mongodb://127.0.0.1:27017"); //actual ip required for this to work trying to access mongoldb access driver port
  await client.connect();
  db = client.db("react-blog-db");
  //need to call cb without any arguyment
  cb();
}

export { db, connectToDb };
