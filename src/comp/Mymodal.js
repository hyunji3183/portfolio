import React from 'react'
import '../modal.scss';

function Mymodal({ setModalOpen, Troubledata }) {
    const closeModal = () => {
        const body = document.querySelector('body');
        body.style.overflow = "auto";
        setModalOpen(false);
    };
    return (
        <>
            <section className='modal_page'>
                <div className='show_modal'>
                    <div className='modal'>
                        <div className='txt_box'>
                            <div className='name'>
                                <b>&#60;{Troubledata.name} /&#62;</b>
                                <span className="material-symbols-rounded close" onClick={closeModal}>
                                    close
                                </span>
                            </div>
                            <div className='contents'>
                                <p>Trouble shooting</p>
                                <ul className='contents_txt'>
                                    {Troubledata.Trouble.map((item, key) => (
                                        <li key={key}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mymodal