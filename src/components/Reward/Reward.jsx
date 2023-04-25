import React from "react";
import "./reward.css";
import Helmet from "../Helmet/Helmet";
import { Link } from 'react-router-dom'
// import {reward1,reward2,reward3,reward4,reward5,reward6,reward7,reward8} from "./index"


const Reward = () =>{
 return(
    <Helmet title='Reward'>
    <div className="reward-banner">
        <h2>EXPLORE POSSIBILITIES WITH EVERY SIP</h2>
    </div>
    <section className="reward-container">
        <div className="reward-img one">
            <div className="rewrad-txt">
                <h3>SUPPORT THE AMERICAN RED CROSS</h3>
                <p>The American Red Cross is providing shelter and delivering relief supplies to residents impacted by recent wildfires and hurricanes. Join us in raising funds with Coca‑Cola® Give to support the American Red Cross relief efforts today.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img two">
            <div className="rewrad-txt">
                <h3>TOGETHER WE CAN CHANGE KIDS' HEALTH</h3>
                <p>Children's hospitals are on the front lines in the COVID-19 crisis. Join us in support of Children's Miracle Network Hospitals® by donating product codes to protect the most vulnerable kids. Together, we can change the future.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img three">
            <div className="rewrad-txt">
                <h3>HELP BOYS & GIRLS CLUBS SUPPORT KIDS AND FAMILIES DURING THE COVID-19 CRISIS</h3>
                <p>Boys & Girls Clubs of America is doing whatever it takes for kids, families, and communities during the coronavirus pandemic – from providing meals to those in need, expanding services to support families of first responders, and offering virtual learning and programming to keep kids and teens engaged and on-track academically. Donate product codes today – each donation makes a difference.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img four">
            <div className="rewrad-txt">
                <h3>CONTINUE TO SUPPORT YOUR LOCAL SCHOO</h3>
                <p>Though school is being conducted virtually, your local school still needs support. Donate your cap codes with Coca-Cola Give to give back and support teachers in their time of need.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img five">
            <div className="rewrad-txt">
                <h3>EVEN WHEN WE'RE APART, YOUR SUPPORT KEEPS US TOGETHER</h3>
                <p>Thanks to you, the lifesaving work at St. Jude Children's Research Hospital® continues. One thing will always be certain, families will never receive a bill from St. Jude for treatment, travel, housing or food because all a family should worry about is helping their child live. But we can’t do it without you. Please consider giving today to help families like St. Jude patient Karique and his mother.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img six">
            <div className="rewrad-txt">
                <h3>SUPPORT THE NATIONAL PARKS FOUNDATION</h3>
                <p>The National Park Foundation protects America's special places, connects people to nature and inspires the nextr generation of park stewards. Donate today to keep our parks up and running.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="reward-img seven">
            <div className="rewrad-txt">
                <h3>COCA-COLA FREESTYLE® IS NOW IN THE COCA-COLA® APP</h3>
                <p>You can now create custom Coca-Cola mixes, find Freestyle dispensers and pour your favorite beverages with ease, plus unlock exciting rewards all in the palm of your hand.</p>
                <div className="rewrd-btn">
                    <Link to='/login'>
                    <button>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    </Helmet>
 )
}

export default Reward;