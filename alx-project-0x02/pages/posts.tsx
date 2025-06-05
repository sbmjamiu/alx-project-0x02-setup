import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await res.json();
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      )}
    </div>
  );
}
