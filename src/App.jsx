import { Counter } from "./components/Counter"

export const App = () => {
  // Static Data Injectedd through {} reference
  const appContent = {
    heading: "Technigo - The useRef Hook",
    contentTwo:
      "Let's create a simple example using the useRef() hook to preserve a value across renders without causing a re-render. <br><br>In this example, we'll have a component that tracks the number of times a button is clicked. We'll use state to display the count, but we'll also use useRef() to store the previous count. <br><br>This way, even though the component re-renders when the count changes, the previous count stored in the ref doesn't cause additional re-renders.",
  }
  return (
    <div>
      <h1>{appContent.heading}</h1>
      {/* <p>{appContent.contentOne}</p> */}
      {/* Use dangerouslySetInnerHTML to render HTML content */}
      <p dangerouslySetInnerHTML={{ __html: appContent.contentTwo }}></p>
      {/* <p>{appContent.contentTwo}</p> */}
      <p>{appContent.contentThree}</p>
      <p>{appContent.contentFour}</p>

      {/* Hooks Here */}
      <Counter />
    </div>
  )
}