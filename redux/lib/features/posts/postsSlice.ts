import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

export interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
};

// Mock API call with timeout
const mockApiCall = (delayMs: number = 2000): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Getting Started with Redux",
          body: "Redux is a predictable state container for JavaScript apps.",
          userId: "user1",
        },
        {
          id: "2",
          title: "Redux Thunk for Async Actions",
          body: "Redux Thunk middleware allows you to write action creators that return functions.",
          userId: "user2",
        },
        {
          id: "3",
          title: "Next.js with Redux",
          body: "Learn how to set up Redux in your Next.js application for state management.",
          userId: "user1",
        },
      ]);
    }, delayMs);
  });
};

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await mockApiCall(2000);
      return posts;
    } catch (error) {
      return rejectWithValue("Failed to fetch posts");
    }
  },
);

// Async thunk for creating a post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post: Omit<Post, "id">, { rejectWithValue }) => {
    try {
      await mockApiCall(1500);
      return {
        ...post,
        id: Date.now().toString(),
      } as Post;
    } catch (error) {
      return rejectWithValue("Failed to create post");
    }
  },
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create post
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = postsSlice.actions;

export default postsSlice.reducer;
