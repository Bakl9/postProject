import React from 'react';
import Post from "./Post";

const PostList = ({post,title}) => {
    return (
        <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
            {post.map((post) =>
            <Post post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;