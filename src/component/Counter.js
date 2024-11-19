import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../store/counterSlice"


export default function Counter() {

  const dispatch = useDispatch()
  const count = useSelector((store) => store.counter.value)

  return (
    <div className="m-10">
      <h2>{count}</h2>
      <button
        className="border border-black p-3 rounded-lg"
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increment
      </button>
      <button
        className="border border-black p-3 rounded-lg"
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </div>
    
  )
}