import React from 'react'
import '../App.scss';
import { useNavigate } from 'react-router-dom';

function Intro() {
    // const navigate = useNavigate();
    // const openapp = (e) => {
    //     e.preventDefault();
    //     navigate('/Page');
    // }

    return (
        <>
            <div className="container">
                <b>FRONTEND DEVELOPER<br />PORTFOLIO</b>
                <svg className="pulse" viewBox="0 0 1024 1024">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                </svg>
                <div className='res_msg'>
                    <p>Touch anywhere!</p>
                </div>
            </div>
        </>
    )
}

export default Intro