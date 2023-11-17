import '../page.scss';
import React, { useEffect, useState } from 'react';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';
import { Link } from 'react-scroll';
import logo from '../img_src/logo.png';
import top from '../img_src/top.png';
import { useNavigate } from 'react-router-dom';

function Page() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [HeaderVisible, setHeaderVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            const iHeight = window.innerHeight * 1.5;
            setScrollPosition(currentPosition);

            if (currentPosition > scrollPosition) {
                setHeaderVisible(true); // Scroll down
                if (currentPosition > iHeight) {
                    setShowButton(true)
                }
            } else {
                setHeaderVisible(false); // Scroll up or at the top
                if (currentPosition < iHeight) {
                    setShowButton(false)
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const [onmenu, setOnmenu] = useState(false);


    const open_menu = () => {
        setOnmenu(!onmenu);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    const navigate = useNavigate();
    const back_intro = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <header className={HeaderVisible ? 'on' : ''}>
                <div className='headerbox'>
                    <h1><img src={logo} alt="main_logo" onClick={back_intro}/></h1>
                <span className="material-symbols-rounded" onClick={open_menu}>
                    menu
                </span>
                <nav className={onmenu ? 'on' : ''}>
                    <Link to="about" smooth={true} duration={500} spy={true}> &#60;About /&#62;</Link>
                    <Link to="skill" smooth={true} duration={500} spy={true}> &#60;Skill /&#62;</Link>
                    <Link to="project" smooth={true} duration={500} spy={true}> &#60;Project /&#62;</Link>
                    <Link to="contact" smooth={true} duration={500} spy={true}> &#60;Contact /&#62;</Link>
                </nav>
            </div>
        </header >
            <About />
            <Skill />
            <Project />
            <Contact />
            <div className='bubble_box'>
                <span className='blue_ball b4'></span>
                <span className='blue_ball b7'></span>
                <span className='blue_ball b6'></span>
                <span className='blue_ball b3'></span>
                <span className='blue_ball b1'></span>
                <span className='blue_ball b2'></span>
                <span className='blue_ball b5'></span>
                <span className='blue_ball b4'></span>
                <span className='blue_ball b7'></span>
                <span className='blue_ball b2'></span>
                <span className='blue_ball b3'></span>
                <span className='blue_ball b6'></span>
                <span className='blue_ball b5'></span>
                <span className='blue_ball b1'></span>
            </div>
            <aside>
                <p className={showButton ? 'on' : ''} onClick={scrollToTop}><img src={top} alt="" /></p>
            </aside>
        </>
    );
}

export default Page;
