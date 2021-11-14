import React, {useState} from 'react';

const Post = (props) => {

    return (
        <div>
            <div className="App">
                <div className="post">
                    <div className="post__content">
                        <strong>{props.post.id}, {props.post.title}</strong>
                        <div>
                            {props.post.body}
                        </div>
                    </div>
                    <div className="btt">
                        <button>Удалить пост</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;

