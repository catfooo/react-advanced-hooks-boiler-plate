import { SimpleCounter } from "./components/SimpleCounter"

export const App = () => {
  // Static Data Injected through {} reference
  const appContent = {
    heading: "Technigo - Simple Counter using the useLayoutEffect Hook",
    contentOne:
      "Imagine you are building counter that once the counter is clicked to increase in value we will update the title of the document with this value.",
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
      <SimpleCounter />
      
    </div>
  )
}