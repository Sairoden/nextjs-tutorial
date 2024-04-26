"use client";

// REACT
import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary mr-2"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          setCount(prevCount => (prevCount === 0 ? 0 : prevCount - 1))
        }
      >
        Decrement
      </button>
    </div>
  );
}
