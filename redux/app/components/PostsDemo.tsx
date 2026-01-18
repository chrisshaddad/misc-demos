"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchPosts,
  createPost,
  clearError,
  type Post,
} from "@/lib/features/posts/postsSlice";
import { useState } from "react";

export function PostsDemo() {
  const dispatch = useAppDispatch();
  const {
    items: posts,
    loading,
    error,
  } = useAppSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleFetchPosts = () => {
    dispatch(fetchPosts());
  };

  const handleCreatePost = () => {
    if (title.trim() && body.trim()) {
      dispatch(
        createPost({
          title,
          body,
          userId: "user1",
        }),
      );
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="rounded-lg bg-purple-50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-purple-900">
        Redux Thunk Example - Posts
      </h2>
      <p className="mb-4 text-purple-700">
        Demonstrates async actions with Redux Thunk middleware and mocked API
        calls
      </p>

      <div className="mb-6 space-y-4 rounded-md bg-white p-4">
        <div>
          <button
            onClick={handleFetchPosts}
            disabled={loading}
            className="w-full rounded bg-purple-500 px-4 py-2 font-semibold text-white hover:bg-purple-600 disabled:opacity-50"
          >
            {loading ? "Fetching Posts..." : "Fetch Posts (Mock 2s delay)"}
          </button>
        </div>

        {error && (
          <div className="rounded-md bg-red-100 p-4">
            <p className="text-red-700">{error}</p>
            <button
              onClick={() => dispatch(clearError())}
              className="mt-2 text-sm text-red-600 hover:text-red-800"
            >
              Dismiss
            </button>
          </div>
        )}

        {loading && posts.length === 0 && (
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-300 border-t-purple-600"></div>
            <span className="ml-2 text-purple-600">Loading posts...</span>
          </div>
        )}

        {posts.length > 0 && (
          <div>
            <h3 className="mb-3 font-semibold text-gray-900">
              Posts ({posts.length})
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {posts.map((post: Post) => (
                <div
                  key={post.id}
                  className="rounded border-l-4 border-purple-500 bg-purple-50 p-3"
                >
                  <p className="font-semibold text-gray-900">{post.title}</p>
                  <p className="text-sm text-gray-600">{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-md bg-white p-4">
        <h3 className="mb-3 font-semibold text-gray-900">Create New Post</h3>
        <div className="space-y-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Post content"
            rows={3}
            className="w-full rounded border border-gray-300 px-3 py-2"
          />
          <button
            onClick={handleCreatePost}
            disabled={loading || !title.trim() || !body.trim()}
            className="w-full rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Post (Mock 1.5s delay)"}
          </button>
        </div>
      </div>
    </div>
  );
}
