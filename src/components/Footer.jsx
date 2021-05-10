import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="footer">
                <nav>
                    <ul>
                        <span>Follow Us: </span>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Footer;