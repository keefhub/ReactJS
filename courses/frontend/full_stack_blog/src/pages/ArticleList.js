import articles from "./Article-Content";
import ArticlesList from "../components/ArticlesList";

const ArticleList = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticleList;
