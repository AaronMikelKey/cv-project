import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faPen, faCheck)

function SaveButton(props) {
    return (
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={faCheck} className="mr-1" />Save General Info
        </button>
    );
}

function EditButton(props) {
    return (
        <button onClick={props.onClick}>
            <FontAwesomeIcon icon={faPen} className="mr-1" />Edit General Info
        </button>
    );
}


class SaveControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleSaveGen = this.handleSaveGen.bind(this);
        this.handleEditGen = this.handleEditGen.bind(this);
        this.state = { genIsSaved: false };
    }

    handleSaveGen() {
        this.setState({ genIsSaved: true });
    }

    handleEditGen() {
        this.setState({ genIsSaved: false });
    }

    render() {
        const isSaved = this.state.genIsSaved;
        let button;
        if (isSaved) {
            button = <EditButton onClick={this.handleEditGen} />;
            return (
                <div>
                    { button}
                </div>
            )
        } else {
            button = <SaveButton onClick={this.handleSaveGen} />;
            return (
                <div>
                    { button}
                </div>
            )
        }
    }
}

export default SaveControl;