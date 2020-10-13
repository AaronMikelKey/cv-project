import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPlus, faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faCheck, faBuilding)

const ExpInfo = (props) => {

  const { userInput } = props;
  return (
    <div>
      <div> <FontAwesomeIcon icon={faBuilding} className="mr-1" />Experience </div>
      <div className="input-group mb-3">
        <input type="text" aria-label="Employer" className="form-control" placeholder="Employer" />
        <input type="text" aria-label="Position" className="form-control" placeholder="Position" />
        <input type="text" aria-label="Years" className="form-control" placeholder="Years" />
      </div>
      <button className="btn btn-info btn-block w-auto mx-auto"><FontAwesomeIcon icon={faPlus} className="mr-1" />Add Work Experience</button>
      <button className="btn btn-success btn-block w-auto mx-auto"><FontAwesomeIcon icon={faCheck} className="mr-1" />Save Work Experience</button>
    </div>
  );
};

export default ExpInfo;