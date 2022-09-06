import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="box-footer">
                <div className="item-footer">
                    <div className="box-logo">
                        <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2017/01/new-logo.png" alt="" />
                    </div>
                    <div className="item-content-footer">
                        At vero eos et accusam et justo duo dolo res et ea rebum. Stet clita kasd guber gren. Aenean sollici tudin lorem quis biben dum auci elit clita.
                    </div>
                    <div className="item-content-footer">
                        <i class='bx bx-phone-call'></i> +387643932728
                    </div>
                    <div className="item-content-footer">
                        <i class='bx bx-map'></i> Eighth Avenue 487, New York
                    </div>
                </div>
                <div className="item-footer">
                    <div className="form-control">
                        <input type="text" className='item-form' placeholder='Name' />
                    </div>
                    <div className="form-control">
                        <input type="text" className='item-form' placeholder='Email' />
                    </div>
                    <div className="form-control">
                        <input type="text" className='item-form' placeholder='Comment' />
                    </div>
                    <div className="form-control">
                        <button className='btn-submit'>Submit</button>
                    </div>
                </div>
                <div className="item-footer">
                    <div className="item-content-footer title-footer">
                        Twitter feed
                    </div>
                    <div className="item-content-footer">
                        <span>@QuickPro5 @cssdesignawards</span> Hey, please check your inbox for more details.
                    </div>
                    <div className="item-content-footer">
                        <span>@GeorgiaAnneUK</span> Poedit is a software and you can download it here <span>https://t.co/slOtDps7jf</span>. You can see how we use it…
                    </div>
                    <div className="item-content-footer">
                        <a href="https://www.facebook.com/" className='social-icon'><i class='bx bxl-facebook-circle'></i></a>
                        <a href="https://www.instagram.com/" className='social-icon'><i class='bx bxl-instagram'></i></a>
                        <a href="https://twitter.com/" className='social-icon'><i class='bx bxl-twitter' ></i></a>
                        <a href="https://youtube.com/" className='social-icon'><i class='bx bxl-youtube' ></i></a>
                    </div>
                </div>
                <div className="item-footer">
                    <div className="box-image-footer">
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                    <div className="box-image-footer">
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div className="item-image-footer">
                            <img src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;