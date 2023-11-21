import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Page from './comp/Page';
import About from './comp/About';
import Skill from './comp/Skill';
import Contact from './comp/Contact';
import Project from './comp/Project';
import Intro_2 from './comp/Intro_2';


function App() {
    return (
        <>
            <BrowserRouter basename='/portfolio'>
                <Routes>
                    <Route path="/" element={<Intro_2 />} />
                    <Route path="/page" element={<Page />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
