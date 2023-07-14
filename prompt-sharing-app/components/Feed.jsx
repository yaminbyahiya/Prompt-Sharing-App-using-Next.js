'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map((post)=>(
          <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}></PromptCard>
        ))
      }
    </div>
  )
}
const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
    const data = await response.json();
    setPosts(data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("posts", posts);
  
  return (
    <section className="feed">
      <form className="relative w-full flex-container">
        <input type="text" placeholder='Search for a tag or a username' value={searchText} onChange={handleSearchChange} className="search_input peer" />
      </form>
      <PromptCardList
      data={posts}
      handleTagClick={()=>{}}>
      </PromptCardList>
    </section>
  )
}

export default Feed