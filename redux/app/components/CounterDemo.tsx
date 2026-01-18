"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "@/lib/features/counter/counterSlice";

export function CounterDemo() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-lg bg-blue-50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-blue-900">Counter Example</h2>
      <p className="mb-4 text-blue-700">
        A simple synchronous counter demonstrating basic Redux actions
      </p>

      <div className="mb-6 rounded-md bg-white p-4">
        <p className="mb-4 text-center text-4xl font-bold text-blue-600">
          {count}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => dispatch(increment())}
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600"
          >
            Add 5
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
