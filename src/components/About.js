import React from 'react'
import cover from '../img/skull.jpg'
function About() {

    return (
        <>
            <div className="container">
                <div className="display-3 text-center my-3">This is Texty App</div>
            </div>
            <div className="container"><div className="col-lg-12 card">
                <img src={cover} className="card-img-top" alt="Texty Logo" />
                <div className="card-body">
                    <h5 className="card-title">Texty is simple react app to process text</h5>
                    <p className="card-text">You can process your text and play around with it. You can convert your text to uppercase or lower case. This is still under development. New features will be added with time. and also that image is my favorite so I used that there which doesn't even make sense. and also this is useless app. <br /> I am working on dark mode of this app so yeah.</p>
                </div>
            </div></div>
        </>
    )
}

export default About
