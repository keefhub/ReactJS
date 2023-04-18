import express from "express";
import { db, connectToDb } from "./db.js";
import fs from "fs";
import admin from "firebase-admin";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const credentials = JSON.parse(fs.readFileSync("./credentials.json"));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

//creating express server
const app = express();
app.use(express.json()); //when it receives req with json payload, parse it automatically into req.body
app.use(express.static(path.join(__dirname, "../build")));

//handles route that dont start with api
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.use(async (req, res, next) => {
  const { authtoken } = req.headers;

  if (authtoken) {
    try {
      req.user = await admin.auth().verifyIdToken(authtoken);
    } catch (e) {
      return req, sendStatus(400);
    }
  }
  req.user = req.user || {};
  next();
});

//loading info
app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || []; //default value of empty array
    article.canUpvote = uid && !upvoteIds.include(uid);
    res.json(article);
  } else {
    res.sendStatus(404).send("Article not found");
  }
});

app.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
});

//creating upvote endpoint
app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const { uid } = req.user;

  //query to db

  if (article) {
    const upvoteIds = article.upvoteIds || []; //default value of empty array
    const canUpvote = uid && !upvoteIds.include(uid);
    if (canUpvote) {
      await db
        .collection("articles")
        .updateOne(
          { name },
          { $inc: { upvotes: 1 }, $push: { upvoteIds: uid } }
        );
    }
    const updatedArticle = await db.collection("articles").findOne({ name });

    res.json(updatedArticle);
  } else {
    res.send("the article doesn't exist");
  }
});

//adding comments to article
app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { text } = req.body;
  const { postedBy } = req.user;

  //query to db
  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { postedBy: email, text } },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("the article doesn't exist");
  }
});

const PORT = process.env.PORT || 8000;

connectToDb(() => {
  console.log("successfully connected to db");

  app.listen(PORT, () => {
    console.log("Server is listening on port" + PORT);
  });
});
