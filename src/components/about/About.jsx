import React from 'react';
import './index.css'
function About(props) {
    return (
        <div className='about' id='about'>
            <div className="title-main">About us</div>
            <div className="content-about">
                Hello, our chef brings you delicious and nutritious recipes every day. You don't have to think much about how to cook because we're here to help you.
            </div>
            <div className="main-content">
                <div className="lorem-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error consequatur, a fugit beatae laborum deserunt! Recusandae, quis? Quo in omnis consequatur exercitationem illo non quae numquam, perspiciatis totam a veritatis.</div>
                <div className="lorem-about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error consequatur, a fugit beatae laborum deserunt! Recusandae, quis? Quo in omnis consequatur exercitationem illo non quae numquam, perspiciatis totam a veritatis.</div>
            </div>
        </div>
    );
}

export default About;