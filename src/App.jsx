import { DomExample } from "./components/DomExample"

export const App = () => {
  // Static Data Injected Through {} reference
  const appContent = {
    heading: "Technigo - The useRef Hook",
    reactivedataExampleOne:
      "These examples showcase various ways useRef can be used to interact with and manipulate DOM elements directly within functional components in React.",
  }
  return (
    <div>
      <h1>{appContent.heading}</h1>
      <p>{appContent.reactivedataExampleOne}</p>
      {/* <p>{appContent.contentTwo}</p>
      <p>{appContent.contentThree}</p>
      <p>{appContent.contentFour}</p> */}

      {/* Hooks Here */}
      <DomExample />
    </div>
  )
}