import { useRef, useEffect } from "react"

export const DomExample = () => {
    // Example 1: Basic useRef to manipulate DOM directly
    // Creating a ref to hold the reference to the div element
    const basicRef = useRef()

    // Example 2: Controlling input focus
    // Creating a ref to hold the reference to the input element
    const focusRef = useRef();

    // Example 3: Changing innerHTML of an element
    // Creating a ref to hold the reference to the div element
    const htmlRef = useRef()
    
    // Example 4: Changing the src of an image dynamically
    // Creating a ref to hold the reference to the img element
    const imageRef = useRef()

    // Example 5: Smooth Scrolling to a Section
    // Creating a ref to hold the reference to the section element
    const sectionRef = useRef()
    // Example 5: Function
    // Function to handle smooth scrolling
    const handleScrollToSection = () => sectionRef.current.scrollIntoView({behavior: "smooth" })

    // useEffect for side effects
    // Using useEffect to perform side effects after the component has mounted
    useEffect(() => {
        // Example 1
        basicRef.current.style.backgroundColor = 'blue';
        basicRef.current.style.color = "white";
        basicRef.current.innerText = "I love coding :)";

        // Example 2
        focusRef.current.focus()

        // Example 3: Changing the innerHTML of the div to bold text
        htmlRef.current.innerHTML = "<strong>I love React JS</strong>"

        // Example 4: Changing the src attribute of the image to a placeholder image
        imageRef.current.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1200px-Ikea_logo.svg.png"
        imageRef.current.alt = "Logo of Ikea"
    }, [])
  return (
    <>
      <div ref={basicRef} style={{ padding: "20px" }}>
        hello
      </div>
      <input ref={focusRef} type="text" name="input-element" id="input-element" />
      {/* Example 3: A div that will have its innerHTML changed */}
      <div ref={htmlRef}>Example 3: Change the content of this div:)</div>
      {/* Example 4: An image that will have its src attribute changed */}
      <img ref={imageRef} width="150" />
      {/* Example 5: Two sections that one of them is scrolled into view using a smooth behaviour approach */}
      <button onClick={handleScrollToSection}>Scroll to section</button>
      <div style={{height: "100vh", backgroundColor: "orange"}}>
        Scroll Past me
      </div>
      {/* The section we will be smoothScrolling into */}
      <div ref={sectionRef} style={{height: "100vh", backgroundColor: "blue"}}>
        Section that will be scroll into
      </div>
    </>
  )
}
