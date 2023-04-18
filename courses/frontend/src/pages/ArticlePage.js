import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import articles from "./Article-Content";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

//useState stores memories, useEffect adds logic to components like loading data from server
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const canUpvote = articleInfo;
  const { articleId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    if (isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);
  //empty array only want to call this function we are passing when component is first added to dom otherwise it will keep updating

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Already upvoted "}{" "}
          </button>
        ) : (
          <button>log in to upvote</button>
        )}

        <p>this article has {articleInfo.upvotes} upvote</p>
      </div>

      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button>log in to comment</button>
      )}

      <CommentList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
