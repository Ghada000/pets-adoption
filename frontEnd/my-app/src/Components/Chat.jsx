// ChatBox.js
import React, { useState } from 'react';
import Post from './Post';
import '../App.css';



const Chat = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), text: newPostText, comments: [] };
    setPosts([...posts, newPost]);
    setNewPostText('');
  };

  return (
    <div className='bodyy'>
      <h2 className='Posts'>Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      
      <form className='Input' onSubmit={handlePostSubmit}>
        <input className='inpuut'
          type="text"
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="Write a post..."
        />
        <button className='Buttons' type="submit">Post</button>
      </form>
    </div>
  );
};

export default Chat;
