import React from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(content);

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
