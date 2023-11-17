import React, { useState } from 'react';
import QR from '../img_src/kakao_QR.png';
import contact_me from '../img_src/contact_me.png';
import Inview from './Inview';

function Contact() {
    const [isFlipped, setIsFlip] = useState(false);

    const handleFlipClick = () => {
        setIsFlip(!isFlipped);
    };


    return (
        <section className='contact_page' id='contact'>
            <div className='color_box'>
                <p>contact</p>
            </div>
            <Inview>
                <div className={`flip ${isFlipped ? 'on' : ''}`} onClick={handleFlipClick}>
                    <div className='front'>
                        <div className='con_left'>
                            <b>&#60;hyun ji cho /&#62;</b>
                            <div className='con_text'>
                                <div className='email'>
                                    <p>Email</p>
                                    <span>chj3183@gmail.com</span>
                                </div>
                                <div className='Github'>
                                    <p>Github</p>
                                    <span>https://github.com/hyunji3183</span>
                                </div>
                            </div>
                        </div>
                        <div className='con_right'>
                            <p> <img src={QR} alt='kakao_qr' /></p>
                        </div>
                    </div>
                    <div className='back'>
                        <p><img src={contact_me} alt='contact_me' /></p>
                    </div>
                </div>
            </Inview>
        </section>
    );
}

export default Contact;
