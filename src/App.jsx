import { lazy, Suspense, useEffect } from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { Toaster } from "react-hot-toast"

const Home = lazy(() => import("./components/home/Home"))
const About = lazy(() => import("./components/about/About"))
const Experience = lazy(() => import("./components/experience/Experience"))
const Projects = lazy(() => import("./components/projects/Projects"))

function App() {
  useEffect(() => {
    document.title = "Yash Kewte"
  }, [])

  return (
    // use bg color [#171d32u]
    <div id="appbody" className="bg-blue-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Suspense fallback={<div className="flex items-center justify-center h-screen text-white">Loading...</div>}>
        <Home />
        <About />
        <Experience />
        <Projects />
      </Suspense>
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
