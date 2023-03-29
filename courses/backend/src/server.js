import express from "express";
import { MongoClient } from "mongodb";
import { db, connectToDb } from "./db.js";

//creating express server
const app = express();
app.use(express.json()); //when it receives req with json payload, parse it automatically into req.body

//loading info 
app.get('/api/articles/:name', async (req,res) =>{
  const {name} = req.params;

  //this connects to mongodb
  const client = new MongoClient('mongodb://127.0.0.1:27017'); //actual ip required for this to work trying to access mongoldb access driver port
  await client.connect();

  const db = client.db('react-blog-db'); 
  const article = await db.collection('articles').findOne({name}); 

  if (article){
    res.json(article);
  } else {
    res.sendStatus(404).send('Article not found');
  }
  
})

//creating upvote endpoint
app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  const client = new MongoClient('mongodb://127.0.0.1:27017'); //actual ip required for this to work trying to access mongoldb access driver port
  await client.connect();

  if (article) {
    res.send(`the ${name} article has now ${article.upvotes} upvotes`);
  } else {
    res.send("the article doesn't exist");
  }
});

//adding comments to article
app.post('/api/articles/:name/comments', async (req,res) =>{
  const {name} = req.params;
  const {postedBy,text} = req.body;

  //connecting to db
  const client = new MongoClient('mongodb://127.0.0.1:27017'); //actual ip required for this to work trying to access mongoldb access driver port
  await client.connect();

  if (article){
    res.send(article.comments);
  } else{
    res.send("the article doesn't exist");
  }
}) 

connectToDb(() =>{
  console.log('successfully connected to db');

  app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
})
