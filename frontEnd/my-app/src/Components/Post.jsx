// Post.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import '../App.css'

 
const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const [newCommentText, setNewCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = { id: Date.now(), text: newCommentText };
    setComments([...comments, newComment]);
    setNewCommentText('');
  };

  return (
    <div>
      <p className='text'>{post.text}</p>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm
        newCommentText={newCommentText}
        onCommentTextChange={(e) => setNewCommentText(e.target.value)}
        onCommentSubmit={handleCommentSubmit}
      />
    </div>
  );
};

export default Post;
