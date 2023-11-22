import React, { useEffect, useRef, useState } from 'react'

function ProContent({ item }) {

    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slide, setSlide] = useState(0);
    
    const handlePage = (type) => {
        const lastIndex = item.image.length - 1;
        switch (type) {
            case 'next':
                setCurrentIndex((prevIndex) =>
                    prevIndex < lastIndex ? prevIndex + 1 : 0
                );
                break;
            case 'prev':
                setCurrentIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : lastIndex
                );
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setSlide(currentIndex * ref.current.offsetWidth);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            handlePage('next');
        }, 1700);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <>
            <ul>
                {item.image.map((img, key) => (
                    <li key={key} ref={ref} style={{
                        position: 'relative',
                        right: slide + 'px',
                        transition: '0.3s'
                    }}><img src={img} alt={img} /></li>
                ))}
            </ul>
            <div className='btn_box'>
                <span className="material-symbols-rounded" onClick={() => { handlePage('prev') }}>
                    navigate_before
                </span>
                <span className="material-symbols-rounded" onClick={() => { handlePage('next') }}>
                    navigate_next
                </span>
            </div>
        </>
    )
}

export default ProContent