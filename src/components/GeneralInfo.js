import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faAddressCard, faEnvelope, faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import SaveButton from './SaveButton';

library.add(faUser, faAddressCard, faPhone, faEnvelope, faCheck)

class GenInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);

    };

    

    handleName = (e) => {
        this.setState({
          name: e.target.name,
        });
    };

    handleAddress = (e) => {
        this.setState({
          address: e.target.address,
        });
    };

    handlePhone = (e) => {
        this.setState({
          phone: e.target.phone,
        });
    };

    handleEmail = (e) => {
        this.setState({
          email: e.target.email,
        });
    };

    saveGen = (e) => {
        this.setState({
            genIsSaved: true,
        });
    };

    editGen = (e) => {
        this.setState({
            genIsSaved: false,
        });
    };

    

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="nameInput"><FontAwesomeIcon icon={faUser} className="mr-1" />Name</label>
                    <input type="text" id="nameInput" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                    <label htmlFor="addressInput"><FontAwesomeIcon icon={faAddressCard} className="mr-1" />Address</label>
                    <input type="text" id="addressInput" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneInput"><FontAwesomeIcon icon={faPhone} className="mr-1" />Phone Number</label>
                    <input type="text" id="phoneInput" className="form-control form-control-sm" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput"><FontAwesomeIcon icon={faEnvelope} className="mr-1" />Email</label>
                    <input type="text" id="emailInput" className="form-control form-control-sm" />
                    <SaveButton />
                </div>
            </div>
        );
    }
}


export default GenInfo;