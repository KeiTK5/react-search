import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="footer">
                <nav className='nav'>
                    <span>Follow Us: </span>
                    <ul className='list-item social'>
                        <li><a href="#"><i class='bx bxl-meta' ></i></a></li>
                        <li><a href="#"><i class='bx bxl-twitter' ></i></a></li>
                        <li><a href="#"><i class='bx bxl-youtube' ></i></a></li>
                        <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
                    </ul>
                </nav>
                <nav className='nav'>
                    <ul className='list-item'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </nav>
                <nav className='nav'>
                    <ul className='list-item'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </nav>
                <nav className='nav'>
                    <ul className='list-item'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Footer;