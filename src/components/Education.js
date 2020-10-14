
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add( faGraduationCap, faPlus, faCheck )


const EduInfo = (props) => {

  return (
    <div>
      <span><FontAwesomeIcon icon={faGraduationCap} className="mr-1" />Education</span>
      <div className="input-group mb-3">
        <input type="text" aria-label="School" className="form-control" placeholder="School" />
        <input type="text" aria-label="Degree" className="form-control" placeholder="Degree" />
        <input type="text" aria-label="Years" className="form-control" placeholder="Years" />
      </div>
      <button className="btn btn-info btn-block w-auto mx-auto"><FontAwesomeIcon icon={faPlus} className="mr-1" />Add Education</button>
      <button className="btn btn-success btn-block w-auto mx-auto"><FontAwesomeIcon icon={faCheck} className="mr-1" />Save Education</button>
    </div>
  );
};

export default EduInfo;
