import React, { useState } from 'react';
import './Country.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0 5rem',
        backgroundColor: 'slateblue',
        color: 'white',
        borderRadius: '5px',
        width: '50%'
    }
};

Modal.setAppElement('#root');

interface IProps {
    country: {
        name: string;
        flag: string;
        alpha3Code: string;
        capital: string;
        population: number;
        region: string;
        subregion: string;
    }
}

const Country = (props: IProps) => {
    const { name, flag, capital, population, region, subregion } = props.country;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (): void => {
        setModalIsOpen(true);
        document.title = name;
    };
    const closeModal = (): void => {
        setModalIsOpen(false);
        document.title = 'ALL Countries';
    }

    return (
        <div className="col-xl-4 col-md-6 text-center p-5 country-card">
            <img className="img-fluid" src={flag} alt="Flag" />
            <h2 className="p-4">{name}</h2>
            <button onClick={openModal} className="details-btn"><strong>Details</strong></button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
            >
                <div className="d-flex flex-column justify-content-center align-items-center m-5 text-center">
                    <img className="w-50 mb-3" src={flag} alt="Flag" />
                    <h2>{name}</h2>
                </div>
                <button onClick={closeModal} className='modal-close-btn'><FontAwesomeIcon icon={faTimes} /></button>
                <h5>Capital: {capital}</h5>
                <h5>Population: {population}</h5>
                <h5>Region: {region}</h5>
                <h5 className="mb-5">Subregion: {subregion}</h5>
            </Modal>
        </div>
    );
};

export default Country;