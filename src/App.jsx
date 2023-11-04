import { ToDoApp } from "./components/ToDoApp"
export const App = () => {
  // Static Data Injectedd through {} reference
  const appContent = {
    heading: "Technigo - Creating a to-do list with the useReducer hook",
    contentOne:
      "Imagine creating a detailed to-do app. Lets create a component that uses the useReducer hook to keep track of your to-dos.",
  }
  return (
    <div>
      <h1>{appContent.heading}</h1>
      <p>{appContent.contentOne}</p>
      {/* Use dangerouslySetInnerHTML to render HTML content */}
      <p dangerouslySetInnerHTML={{ __html: appContent.contentTwo }}></p>
      {/* <p>{appContent.contentTwo}</p> */}
      <p>{appContent.contentThree}</p>
      <p>{appContent.contentFour}</p>

      {/* Hooks Here */}
      <ToDoApp />
      
    </div>
  )
}