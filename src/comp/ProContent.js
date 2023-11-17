import React, { useRef, useState } from 'react'

function ProContent({item}) {
    
    const ref = useRef(null);

    const [slide, setSlide] = useState(0);
    const handlePage = (type) => {
        const offsetWidth = ref.current.offsetWidth; // 너비 가져오기
        switch (type) {
            case 'next':
                if (ref.current && (item.image.length - 1) * offsetWidth > slide) {
                    setSlide(slide + offsetWidth); // right 속성 값 업데이트
                }
                break;
            default:
                if (ref.current && slide) {
                    setSlide(slide - offsetWidth); // left 속성 값 업데이트
                    break;
                }
        }
    }


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