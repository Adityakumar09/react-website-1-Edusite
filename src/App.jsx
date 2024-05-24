
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subtitle='our program' title='What We Offer' />
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What student says' />
        <Testimonials />
        <Title subtitle='CONTACT US' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App