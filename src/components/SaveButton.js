import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faPen, faCheck)

function SaveButton(props) {
    return (
        <button className="btn btn-success btn-block w-auto mt-3 mx-auto" >
            <FontAwesomeIcon icon={faCheck} className="mr-1" />Save General Info
        </button>
    );
}

function EditButton(props) {
    return (
        <button className="btn btn-info btn-block w-auto mt-3 mx-auto" >
            <FontAwesomeIcon icon={faPen} className="mr-1" />Edit General Info
        </button>
    );
}


const SaveControl = props => {
/*
    handleSaveGen() {
        this.setState({ genIsSaved: true });
        console.log("Saved");
      }
    
      handleEditGen() {
        this.setState({ genIsSaved: false });
        console.log("Edit")
      } */
    const isSaved = props.genIsSaved;
    let button;
    if (isSaved) {
        button = <EditButton />;
        return (
            <div>
                { button }
            </div>
        )
    } else {
        button = <SaveButton onClick = {props.handleSaveGen}/>;
        return (
            <div>
                { button }
            </div>
        )
    }
}

export default SaveControl;