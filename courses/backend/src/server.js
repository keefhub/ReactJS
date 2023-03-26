import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
  },
  {
    name: "learn-node",
    upvotes: 0,
  },
  {
    name: "mongodb",
    upvotes: 0,
  },
];

//creating express server
const app = express();
app.use(express.json()); //when it receives req with json payload, parse it automatically into req.body

//creating upvote endpoint
app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`the ${name} article has now ${article.upvotes} upvotes`);
  } else {
    res.send("the article doesn't exist");
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
