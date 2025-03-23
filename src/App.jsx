import About from "./components/about/About"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import { Toaster } from "react-hot-toast"
import toast from "react-hot-toast"

function App() {

  document.title = "Yash Kewte"
  return (

    // use bg color [#171d32u]
    <div id="appbody" className="bg-blue-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            fontSize: '18px',
            backgroundColor: "#3E3F5B",
            color: "white"
          }
        }}
      />

    </div>
  )
}

export default App
