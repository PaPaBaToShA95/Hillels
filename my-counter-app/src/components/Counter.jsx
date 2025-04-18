import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Value: {count}</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-red-500 text-white rounded-2xl shadow hover:bg-red-600 transition"
        >
          -
        </button>
      </div>
    </div>
  );
}
