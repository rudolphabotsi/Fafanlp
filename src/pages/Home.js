import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import Functionalities from '../components/Functionalities'
import Utilisation from '../components/Utilisation'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <Landing />
            <Functionalities />
            <Utilisation />
            <ContactForm />
            <Faq />
            <Footer />
        </div>
    )
}
export default Home
