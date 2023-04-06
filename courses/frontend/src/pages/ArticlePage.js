import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import articles from "./Article-Content";
import NotFoundPage from "./NotFoundPage";

//useState stores memories, useEffect adds logic to components like loading data from server
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    setArticleInfo({ upvotes: 3, comments: [] });
  });

  const params = useParams();
  const articleId = params.articleId; // const { articleId} = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>this article has {articleInfo.upvotes} upvote</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
