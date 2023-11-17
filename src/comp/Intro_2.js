import React from 'react'
import '../App.scss';
import { useNavigate } from 'react-router-dom';

function Intro_2() {
    const navigate = useNavigate();
    const openapp = (e) => {
        e.preventDefault();
        navigate('/Page');
    }

    return (
        <>
            <div className="intro_page" onClick={openapp}>
                <div className='intro_box'>
                    <div className='intro_left'>
                        <div className='front'>
                            <p>FRONT</p>
                            <p>END</p>
                        </div>
                        <div className='dev'>
                            <p>DEVELOPER</p>
                        </div>
                    </div>
                    <div className='intro_right'>
                        <div className='txt'>
                            <p>Hello, I'm Hyunji Cho, a front-end developer
                                who finds opportunities in problems and feels a sense
                                of accomplishment through the solution process.
                                We are committed to realizing a better
                                user experience and eliminating user inconvenience.</p>
                        </div>
                        <div className='portfolio'>
                            <p>PORT</p>
                            <p>FOLIO</p>
                        </div>
                    </div>
                </div>
                <div className='txt_con'>
                    <span>Hello, I'm frontend developer Cho Hyunji. Thank you for your visit.</span><span>Hello, I'm frontend developer Cho Hyunji. Thank you for your visit.</span>
                </div>
            </div >
        </>
    )
}

export default Intro_2
