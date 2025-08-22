import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./sections/About"
import Home from "./sections/Home"
import Service from "./sections/Service"


function App() {

  return (
    <>
    <Header/>
      <main>
        <Home/>
        <About/>
        <Service/>
      </main>
    <Footer/>
    </>
  )
}

export default App
