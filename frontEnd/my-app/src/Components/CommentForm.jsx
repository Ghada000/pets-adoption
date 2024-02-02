// CommentForm.js
import React from 'react';
import '../App.css'
const CommentForm = ({ newCommentText, onCommentTextChange, onCommentSubmit }) => {
  return (
    <form className='input' onSubmit={onCommentSubmit}>
      <input className='inpuut'
        type="text"
        value={newCommentText}
        onChange={onCommentTextChange}
        placeholder="Write a comment..."
      />
      <button className='button' type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
