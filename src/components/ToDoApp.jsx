import { useReducer } from "react"

export const ToDoApp = () => {
    // Defining a reducer function that manages the addition and toggling of to-dos.
    const todoReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TODO":
                // If the action type is 'ADD_TODO', return a new state with the new to-do added.
                return [...state, {text: action.text, completed: false}]
            case "TOGGLE_TODO":
                // If the action type is 'TOGGLE_TODO', return a new state with the completed status toggled for the specified to-do.
            return state.map((todo, idx) => 
              idx === action.idx ? {...todo, completed: !todo.completed } : todo
            )
            default:
                throw new Error();
        }
    }

    // Using useReducer to manage the state of our component, initializing with an empty array of to-dos.
    const [todos, dispatch] = useReducer(todoReducer, [])
    // Defining a function to dispatch an 'ADD_TODO' action with the specified text.
    const addTodo = (text) => dispatch({type: "ADD_TODO", text})
    // Defining a function to dispatch a 'TOGGLE_TODO' action with the specified index.
    const toggleTodo = (idx) => dispatch({type: "TOGGLE_TODO", idx })
  return (
    <div>
        <button onClick={() => addTodo(prompt("Enter a task title")) }>Add Todo</button>
        <h5>To dos:</h5>
        <ul>
          {todos.map((todo, idx) => (
            <li 
              style={{textDecoration: todo.completed ? "line-through" : "none"}}
              onClick={() => toggleTodo(idx)}
              key={idx}>
                { todo.text}
            </li>
          ))}
     
        </ul>
        
    </div>
  )
}
