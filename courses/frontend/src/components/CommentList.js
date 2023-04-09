const commentsList = ({ comments }) => (
  <>
    <h3>comments:</h3>
    {comments.map((comments) => (
      <div className="comments" key={comments.postedBy + ":" + comments.text}>
        <h4>{comments.postedBy}</h4>
        <p>{comments.text}</p>
      </div>
    ))}
  </>
);

export default commentsList;
