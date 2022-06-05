import axios from 'axios';
import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = React.useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');

    setPosts(res.data);
  };

  console.log(posts);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ width: '30%', marginBottom: '20px' }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>

          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
