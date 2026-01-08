import { useState } from "react";

function Task1_1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-bold">Task 1.1</h2>
      <h2 className="text-2xl my-2">{count}</h2>

      <div className="flex gap-2">
        <button onClick={increment} className="px-3 py-1 bg-green-500 text-white rounded">
          +1
        </button>

        <button
          onClick={decrement}
          disabled={count === 0}
          className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
        >
          -1
        </button>

        <button onClick={reset} className="px-3 py-1 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Task1_1;
