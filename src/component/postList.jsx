import React from 'react';
import Post from "./Post";

const PostList = ({post,title}) => {
    return (
      <div>
          <h1 style={{textAlign: 'center'}}>
              {title}
          </h1>
          {post.map(post =>
          <div>
              <Post post={post} key={post.id}/>
          </div>
          )}
      </div>
    );
};

export default PostList;