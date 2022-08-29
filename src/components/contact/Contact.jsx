import React from 'react';

import './index.css'
function Contact(props) {
    return (
        <div className='contact' id='contact'>
            <div className="img-contact">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="contact-box">
                <div className="title-contact">
                    Leave us a message if you want to add something !
                </div>
                <div className="control-field">
                    <div className="input">
                        <input type="text" placeholder='Say something...' />
                    </div>
                    <div className="submit">
                        <a href="#" className="btn-submit">Send</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;