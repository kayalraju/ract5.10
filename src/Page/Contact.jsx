import React from 'react'
import ContactForm from '../Component/Contact/ContactForm'

const Contact = () => {
    return (
        <>

            <main id="main">


                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container mt-3">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Contact</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Contact</li>
                            </ol>
                        </div>

                    </div>
                </section>


                <div class="map-section mt-1">
                    <iframe style={{border:"0", width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                </div>

                <ContactForm/>

            </main>

        </>
    )
}

export default Contact
