import { ThemeChanger } from "./components/ThemeChanger"

export const App = () => {
  // Static Data Injected through {} reference
  const appContent = {
    heading: "Technigo - Changing your website theme using the useLayoutEffect Hook",
    contentOne:
      "Imagine you have a website that uses a dark and a light theme, this can be accomplished by implementing the useLayoutEffect hook",
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
      <ThemeChanger />
      
    </div>
  )
}