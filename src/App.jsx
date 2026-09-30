import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import About from './sections/About/About'
import Experience from './sections/Experience/Experience'
import Hero from './sections/Hero/Hero'
import Process from './sections/Process/Process'
import Services from './sections/Services/Services'
import Skills from './sections/Skills/Skills'
import Work from './sections/Work/Work'

import Contact from './pages/Contact/Contact'
import WorkPage from './pages/Work/Work'

const Home = () => {
  return (
    <main id="home">
      <Hero />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Work />
      <Process />
    </main>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App