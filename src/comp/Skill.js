import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Inview from './Inview';

function Skill() {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('/skill.json')
            .then(res => {
                setData(res.data)
            })
    }, []);

    return (
        <section className='skill_page' id='skill'>
            <div className='color_box'>
                <p>skill</p>
            </div>
            <Inview>
                <div className='skill'>
                    <div className='skill_left'>
                        <div className='skill_left_top frame_in'>
                            <p>Front-end</p>
                            <ul>
                                {data.frontend && data.frontend.map(item => (
                                    <li key={item.id}>
                                        <div className='contents_box'>
                                            <div className='skill_name'>
                                                <p><img src={item.icon} alt={item.name} /></p>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className='skill_level'>
                                                <span className={item.state >= 1 ? 'active' : ''}></span>
                                                <span className={item.state >= 2 ? 'active' : ''}></span>
                                                <span className={item.state >= 3 ? 'active' : ''}></span>
                                                <span className={item.state >= 4 ? 'active' : ''}></span>
                                                <span className={item.state >= 5 ? 'active' : ''}></span>
                                            </div>
                                        </div>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                    <span className='middle_line'></span>
                    <div className='skill_right'>
                        <div className='skill_right_top frame_in'>
                            <p>Publishing</p>
                            <ul>
                                {data.publishing && data.publishing.map(item => (
                                    <li key={item.id}>
                                        <div className='contents_box'>
                                            <div className='skill_name'>
                                                <p><img src={item.icon} alt={item.name} /></p>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className='skill_level'>
                                                <span className={item.state >= 1 ? 'active' : ''}></span>
                                                <span className={item.state >= 2 ? 'active' : ''}></span>
                                                <span className={item.state >= 3 ? 'active' : ''}></span>
                                                <span className={item.state >= 4 ? 'active' : ''}></span>
                                                <span className={item.state >= 5 ? 'active' : ''}></span>
                                            </div>
                                        </div>
                                    </li>))}
                            </ul>
                        </div>

                        <div className='skill_right_bottom frame_in'>
                            <p>etc</p>
                            <ul>
                                {data.etc && data.etc.map(item => (
                                    <li key={item.id}>
                                        <div className='contents_box'>
                                            <div className='skill_name'>
                                                <p><img src={item.icon} alt={item.name} /></p>
                                                <span>{item.name}</span>
                                            </div>
                                            <div className='skill_level'>
                                                <span className={item.state >= 1 ? 'active' : ''}></span>
                                                <span className={item.state >= 2 ? 'active' : ''}></span>
                                                <span className={item.state >= 3 ? 'active' : ''}></span>
                                                <span className={item.state >= 4 ? 'active' : ''}></span>
                                                <span className={item.state >= 5 ? 'active' : ''}></span>
                                            </div>
                                        </div>
                                    </li>))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Inview>
        </section>
    )
}

export default Skill