import About from "./components/about/About"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"

function App() {
 

  return (
    // use bg color [#171d32u]
    <div id="appbody" className="bg-blue-950 h-auto w-full overflow-hidden">
      <Navbar />
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
