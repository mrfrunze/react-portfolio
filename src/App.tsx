import BackToTop from "./components/BackToTop"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./sections/About"
import Home from "./sections/Home"
import Portfolio from "./sections/Portfolio"
import Service from "./sections/Service"


function App() {

  return (
    <>
    <Header/>
      <main>
        <Home/>
        <About/>
        <Service/>
        <Portfolio/>
      </main>
    <Footer/>
    <BackToTop/>
    </>
  )
}

export default App
