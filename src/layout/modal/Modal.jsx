import React, { useState } from 'react';
import './index.css'
function Modal(props) {
    const { closeModal, data, modal } = props
    return (
        <>
            <div className={`overlay ${modal}`}></div>
            <div className={`modal ${modal}`}>
                <div className="close" onClick={closeModal}><i class='bx bx-x'></i></div>
                <div className="box-modal">
                    <div className="box-product">
                        <div className="image-food">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="content-food">
                            <div className="name">{data.label}</div>
                            <div className="box-ingredients">
                                <div className="text-ingredient">Ingredient:</div>
                                {data.ingredients.map((item, index) => (
                                    <div className="ingredient"><p className="index">{index + 1}: </p>{item.text}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="making">
                        <div className="text-make">How To Cook ?</div>
                        <div className="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt, eos odio temporibus doloremque eligendi, illo ducimus obcaecati tenetur optio sequi! Amet provident nostrum repudiandae expedita assumenda. Et, in cumque?
                        </div>
                        <br />
                        <div className="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt, eos odio temporibus doloremque eligendi, illo ducimus obcaecati tenetur optio sequi! Amet provident nostrum repudiandae expedita assumenda. Et, in cumque?
                        </div>
                        <br />
                        <div className="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt, eos odio temporibus doloremque eligendi, illo ducimus obcaecati tenetur optio sequi! Amet provident nostrum repudiandae expedita assumenda. Et, in cumque?
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;