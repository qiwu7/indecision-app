import React from 'react';
import Modal from 'react-modal';

const optionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleDismissOptionModal}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleDismissOptionModal}>OK</button> 
        </Modal>
    );
};

export default optionModal;