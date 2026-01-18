import { CounterDemo } from "./components/CounterDemo";
import { PostsDemo } from "./components/PostsDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Redux with Next.js Demo
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrating Redux Toolkit with Redux Thunk middleware
          </p>
        </div>

        <div className="space-y-8">
          <CounterDemo />
          <PostsDemo />

          <div className="rounded-lg bg-green-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-green-900">
              What You're Seeing
            </h2>
            <div className="space-y-3 text-green-800">
              <p>
                <strong>Counter Example:</strong> Demonstrates basic synchronous
                Redux actions. State updates happen immediately without delays.
              </p>
              <p>
                <strong>Posts Example:</strong> Demonstrates Redux Thunk
                middleware for handling asynchronous operations. API calls are
                mocked with timeouts to simulate real network requests.
              </p>
              <p>
                <strong>Store Setup:</strong> Following the official Redux
                Toolkit Next.js guide with per-request store creation to handle
                Next.js App Router architecture properly.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Redux Toolkit with configureStore</li>
                <li>Redux Thunk for async actions</li>
                <li>TypeScript support with proper typing</li>
                <li>Proper Next.js App Router integration</li>
                <li>Mocked API calls with timeouts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
