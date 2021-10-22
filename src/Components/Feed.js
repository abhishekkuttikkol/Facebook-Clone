import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "../firebase";

const Feed = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .onSnapshot((response) => {
        const allPosts = response.docs.map((post) => {
          return { ...post.data(), id: post.id };
        });
        setposts(allPosts);
      });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => {
        return (
          <Post
            profilePic={post.profilePic}
            message={post.message}
            timestamp={post.timestamp}
            imgName={post.imgName}
            username={post.username}
          />
        );
      })}
    </div>
  );
};

export default Feed;
