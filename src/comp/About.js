import React, { useState } from 'react'
import QR from '../img_src/kakao_QR.png'
import profile2 from '../img_src/profile2.png'
import Inview from './Inview';


function About() {
    const [onkakao, setonkakao] = useState(false);

    const open_qr = () => {
        setonkakao(!onkakao);
    }

    return (
        <section className='about_page' id='about'>
            <Inview>
                <div className='about'>
                    <div className='about_left'>
                        <div className='profile'>
                            <p><img src={profile2} alt='mimoji_profile' /></p>
                            <div className={`info_data ${onkakao ? 'on' : ''}`}>
                                <div>
                                    <p>1996.02.29</p>
                                    <p onClick={open_qr}>kakao talk</p>
                                    <p><a href="mailto: chj3183@gmail.com" title="메일보내기">chj3183@gmail.com</a></p>
                                    <p><a href="https://github.com/hyunji3183" target='_blank' rel="noopener noreferrer">https://github.com/hyunji3183</a></p>
                                </div>
                                <div className='kakao_qr' onClick={open_qr}><img src={QR} alt='kakao_QR' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='about_right'>
                        <b>안녕하세요.<br />
                            <span>프론트엔드 개발자 조현지입니다.👋</span> </b>
                        <div className='about_me'>
                            <p>&#60;About /&#62;</p>
                            <span>안녕하세요, 문제에서 기회를 찾고 해결 과정을 통한 성취감을 느끼는 프론트엔드 개발자입니다.<br />
                                더 나은 사용자 경험을 실현하고, 사용자들의 불편함을 해소하는 것에 진심을 다하고 있습니다.
                            </span>
                        </div>
                        <div className='Education'>
                            <p>&#60;Education /&#62;</p>
                            <div className='edu_data'>
                                <span>2023년 05월 ~ 2023년 11월
                                    프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정 수료</span>
                                <span>2018년 02월 우석대학교 졸업</span>
                                <span>2014년 02월 전주생명과학고등학교 졸업</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Inview>
        </section>
    )
}

export default About