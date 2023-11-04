import { FetchData } from "./components/FetchData"

export const App = () => {
  // Static Data Injected through {} reference
  const appContent = {
    heading: "Technigo - Custom Hook in code",
    contentOne:
      "useFetchData Hook Creation",
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
      <FetchData />
      
    </div>
  )
}