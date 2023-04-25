import React from "react";
import Helmet from "../Helmet/Helmet";
import './creations.css'

const Creations = ()=>{
    return(
        <Helmet title='Creations'>
        <div className="creations-banner"></div>

        <section className="creations-container">
            <div className="creations1">
                <h2>Enjoy the stories, the moments, the experiences of Coca‑Cola Creations</h2>
                <p></p>
            </div>
            <div className="creations2">
                <ul> 
                    <h1 className="text">See our Creations out in the world</h1>
                    <li className="one">
                        <div>
                        </div>
                        <h2>A Journey Into Imagination</h2>
                        <p>Coca-Cola Dreamworld explored the realms of the surreal, the imaginary, and the otherworldly. It brought the familiar Coca-Cola taste and added a surprising and unexpected flavor from a dream world.</p>
                    </li>
                    <li className="two">
                        <div>
                        </div>
                        <h2>A Collab with Marshmello</h2>
                        <p>Marshmello’s limited edition Coca-Cola Creation invited fans to discover the unexpected flavor of the world-renowned artist’s tracks: strawberry and watermelon with the same familiar taste of Coca-Cola.</p>
                    </li>
                    <li className="three">
                        <div>
                        </div>
                        <h2>A Taste Born in the Metaverse</h2>
                        <p>Inspired by gaming, Coca-Cola Byte invited everyone to explore what pixels might taste like IRL with a refreshingly new, yet familiar, Coke flavor experience that transcended the digital and physical worlds.</p>
                    </li>
                    <li className="four">
                        <div>
                        </div>
                        <h2>A Flavor From Out of This World</h2>
                        <p>Space-inspired Coca-Cola Starlight brought a subtle cooling sensation with a new, but familiar Coca-Cola taste. Every sip was a chance to discover the infinite possibilities of a new world far from our own.</p>
                    </li>
                        <h1>Welcome to Coca-Cola Creations.</h1>
                    <li className="five">
                        <div>
                        </div>
                        <h2>Transform the World with Rosalía</h2>
                        <p>Join us for a special charity initiative, an online auction offering exclusive access to Rosalía memorabilia and merchandise, with all proceeds going to The Antonio Gala Foundation to transform creators’ lives through music. Starting 8am PT on March 27th.</p>
                    </li>
                    <li className="six">
                        <div>
                        </div>
                        <h2>Discover Dreamworld IRL in NYC & ATL</h2>
                        <p>Make Dreamworld a reality and create an interactive Dream Mural using new VPS technology in New York City and Atlanta.</p>
                    </li>
                    <li className="seven">
                        <div>
                        </div>
                        <h2>Stick-on gels in dreamy colors? Yes, please!</h2>
                        <p>ManiMe makes it so easy. Check out this Dreamworld set and get yours at Coca-ColaStore.com or ManiMe.co.</p>
                    </li>
                    <li className="eight">
                        <div>
                        </div>
                        <h2>Power On the Byte Mini Fridge by Cooluli</h2>
                        <p>Game at maximum chill with this special edition cooler.</p>
                    </li>
                </ul>
            </div>
        </section>
        </Helmet>
    )
}

export default Creations;