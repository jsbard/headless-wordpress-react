import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://headless-wp-react.local/wp-json/wp/v2/posts`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Fetching posts failed:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
