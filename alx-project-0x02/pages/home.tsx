import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Header />
      <Card title="Post Title" content="Post Content" />

      <Card title="Post Title 2" content="Post Content 2" />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          New Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          posts.map((post, idx) => (
            <div key={idx} className="border rounded-md p-4 shadow-sm bg-white">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
