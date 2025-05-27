"use client";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getCurrentUserPost } from "@/lib/data-service";
import { User } from "@/app/home/profile/userProfile";


const Posts = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [posts, setPosts] = useState<any[] | null>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getCurrentUserPost();
        setPosts(data);
      } catch (error: any) {
        console.error("Error fetching posts:", error);
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="max-w-full rounded-lg">
      {/** WIll add the post types later. */}
      {posts?.map((post: any, index: number) => (
        <PostCard key={post.post_id} post={post} user={user} />
      ))}
    </div>
  );
};

export default Posts;
