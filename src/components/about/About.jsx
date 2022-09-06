import React from 'react';
import './index.css'
import Slider from "react-slick"



function About(props) {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    }
    return (
        <div className='about' id='about'>
            <div className="container-about">
                <div className="title-main">Our Special Team</div>
                <div className="content-about">
                    Hello, our chef brings you delicious and nutritious recipes every day. You don't have to think much about how to cook because we're here to help you.
                </div>
                <div className="main-content">
                    <Slider {...settings}>
                        <div className="box-slide">
                            <div className="content-slide">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit volu ptatem omnis. Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium.
                            </div>
                            <div className="box-info">
                                <div className="box-img-info">
                                    <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-testimonials3.png" alt="" />
                                </div>
                                <div className="box-name-info">
                                    <div className="box-name">
                                        David
                                    </div>
                                    <div className="box-role">Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-slide">
                            <div className="content-slide">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit volu ptatem omnis. Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium.
                            </div>
                            <div className="box-info">
                                <div className="box-img-info">
                                    <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/fruit-testimonials1.png" alt="" />
                                </div>
                                <div className="box-name-info">
                                    <div className="box-name">
                                        David
                                    </div>
                                    <div className="box-role">Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-slide">
                            <div className="content-slide">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit volu ptatem omnis. Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium.
                            </div>
                            <div className="box-info">
                                <div className="box-img-info">
                                    <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-testimonials2.png" alt="" />
                                </div>
                                <div className="box-name-info">
                                    <div className="box-name">
                                        David
                                    </div>
                                    <div className="box-role">Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-slide">
                            <div className="content-slide">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit volu ptatem omnis. Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium.
                            </div>
                            <div className="box-info">
                                <div className="box-img-info">
                                    <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-testimonials3.png" alt="" />
                                </div>
                                <div className="box-name-info">
                                    <div className="box-name">
                                        David
                                    </div>
                                    <div className="box-role">Manager</div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default About;