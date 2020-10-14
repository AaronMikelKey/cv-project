import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faAddressCard, faEnvelope, faCheck, faPhone, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faAddressCard, faPhone, faEnvelope, faCheck, faPen)

const GenInfo = props => {

    function SaveButton() {
        return (
            <button className="btn btn-success btn-block w-auto mt-3 mx-auto" onClick={props.handleSaveGen}>
                <FontAwesomeIcon icon={faCheck} className="mr-1" />Save General Info
            </button>
        );
    }

    function EditButton() {
        return (
            <button className="btn btn-info btn-block w-auto mt-3 mx-auto" onClick={props.handleEditGen}>
                <FontAwesomeIcon icon={faPen} className="mr-1" />Edit General Info
            </button>
        );
    }

    const isSaved = props.genIsSaved;
    let name = <h3> {props.name} </h3>;
    let address = <h6> {props.address} </h6>;
    let phone = <h6> {props.phone} </h6>;
    let email = <h6> {props.email} </h6>;
    let button;
    if (isSaved) {
        button = <EditButton />;
        return (
            //change this to user input info from this.state
            <div>
                {name}
                {address}
                {phone}
                {email}
                {button}
            </div>
        );
    } else {
        button = <SaveButton />;
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="nameInput"><FontAwesomeIcon icon={faUser} className="mr-1" />Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="nameInput" 
                        className="form-control form-control-sm" 
                        onChange={props.handleChange}
                        value={props.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addressInput"><FontAwesomeIcon icon={faAddressCard} className="mr-1" />Address</label>
                    <input type="text" name="address" id="addressInput" className="form-control form-control-sm"
                        onChange={props.handleChange}
                        value={props.address}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneInput"><FontAwesomeIcon icon={faPhone} className="mr-1" />Phone Number</label>
                    <input type="text" name="phone" id="phoneInput" className="form-control form-control-sm"
                        onChange={props.handleChange}
                        value={props.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput"><FontAwesomeIcon icon={faEnvelope} className="mr-1" />Email</label>
                    <input type="text" name="email" id="emailInput" className="form-control form-control-sm"
                        onChange={props.handleChange}
                        value={props.email} />
                    {button}
                </div>
            </div>
        );
    }
}


export default GenInfo;