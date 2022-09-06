import React from 'react';

import './index.css'
function Contact(props) {
    return (
        <div className='contact' id='contact'>
            <div className="lorem-contact">
                <div className="main-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </div>
                <div className="sub-text">
                    Ipsam sit facilis sunt suscipit odio totam soluta quasi? Ut, deleniti corrupti?
                </div>
            </div>
            <div className="contact-box">
                <div className="btn-view">
                    view features
                </div>
                {/* <div className="title-contact">
                    Leave us a message if you want to add something !
                </div>
                <div className="control-field">
                    <div className="input">
                        <input type="text" placeholder='Say something...' />
                    </div>
                    <div className="submit">
                        <a href="#" className="btn-submit">Send</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;