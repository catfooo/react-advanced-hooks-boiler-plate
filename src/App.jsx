import { TimerComponent } from "./components/TimerComponent"

export const App = () => {
  // Static Data Injectedd through {} reference
  const appContent = {
    heading: "Technigo - The useRef Hook",
    contentTwo:
      "Let's create a simple example using the useRef() hook to manage an instance. 'Managing instances' refers to the process of creating, maintaining, and controlling specific occurrences of objects or classes in programming. In the context of React and the useRef() hook, 'managing instances' often refers to keeping a consistent reference to objects, functions, or other values across component re-renders. This ensures that even if a component updates, certain values or objects remain the same and don't get recreated unnecessarily. <br><br> In this example, we build a timer that shows seconds and has a start/pause button. We use useState to keep track of time and if the timer is on. With useRef, we make sure the timer runs smoothly without restarting all the time. We also use useEffect to control when the timer starts or stops. <br><br> This setup ensures our timer works smoothly and cleans up after itself to avoid any potential issues.",
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
      <TimerComponent />
    </div>
  )
}