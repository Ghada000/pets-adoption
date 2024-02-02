// Comment.js
import React from 'react';
import '../App.css'
const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <p className='text'>{comment.text}</p>
    </div>
  );
};

export default Comment;
