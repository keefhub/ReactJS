import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb){

    const client = new MongoClient('mongodb://127.0.0.1:27017'); //actual ip required for this to work trying to access mongoldb access driver port
    await client.connect();

    const db = client.db('react-blog-db'); 
    cb();
}

export {
    db,
    connectToDb,
}