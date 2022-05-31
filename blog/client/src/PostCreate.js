import React from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(title);

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
