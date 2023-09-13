type Post = {
  username: string;
  avatar: string;
  content: string;
};

const Post = ({ post }: { post: Post }) => {
  //console.log(post.content);
  const isClient = typeof window === "object";
  console.log("Post isClient", isClient);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          textAlign: "left",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src={post.avatar}
          alt={`${post.username}'s avatar`}
          width={50}
          style={{
            borderRadius: "50%",
            backgroundColor: "#fff",
            marginRight: "10px",
          }}
        />
        <span>{post.username}</span>
      </div>
      <div>
        <img src={post.content} alt="post content" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Post;
