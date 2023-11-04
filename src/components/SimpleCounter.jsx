import { useState, useLayoutEffect } from "react"

export const SimpleCounter = () => {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    // useLayoutEffect(() => {}, [])
  return (
    <div>
        <p>Count {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
