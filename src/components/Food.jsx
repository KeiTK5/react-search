import React, { useState } from 'react';
import Modal from '../layout/modal/Modal';
function Food(props) {
    const { data } = props

    const [modal, setModal] = useState(" ")

    const openModal = () => {
        setModal("active")
    }
    const closeModal = () => {
        setModal("out")
    }
    return (
        <>
            <div className="items" onClick={openModal}>
                <img src={data.image} alt="images" />
                <h3>{data.label}</h3>
                <p>Calories: <span>{Math.floor(data.calories)}</span></p>

            </div>
            <Modal key={data.label} closeModal={closeModal} data={data} modal={modal} />
        </>
    );
}

export default Food;