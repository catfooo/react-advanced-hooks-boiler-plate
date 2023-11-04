import { useFetchData } from "../hooks/useFetchData"

// https://jsonplaceholder.typicode.com/todos

export const FetchData = () => {

    // Custom Hook application:
    const {data, isLoading} = useFetchData(
        "https://jsonplaceholder.typicode.com/todos"
    )
    
  return (
    <div>
        {isLoading ? (
            <p>Loading....</p>
        ) : (
            <ul>
                {data.slice(0, 10).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        )}
    </div>
  )
}
