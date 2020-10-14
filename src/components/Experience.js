import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faPlus, faBuilding, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faCheck, faBuilding)

const ExpInfo = (props) => {
  const AddExpSave = ({ expList }) => (
    <div>
      {expList.map(exp => (
        <div key={exp.id} >
          <strong>{exp.company}</strong><br />
          {exp.position}<br />
          {exp.years}
        </div>
      ))}
    </div>
  )
  const AddExp = ({ expList }) => (
    <div>
      {expList.map(exp => (
        <div key={exp.id} >
          <strong>{exp.company}</strong><br />
          {exp.position}<br />
          {exp.years}
        </div>
      ))}
      <div className="input-group mb-3">
        <input type="text"
          name="company"
          aria-label="company"
          className="form-control"
          placeholder="Employer"
        />
        <input type="text"
          name="position"
          aria-label="Position"
          className="form-control"
          placeholder="Position"
        />
        <input type="text"
          name="years"
          aria-label="Years"
          className="form-control"
          placeholder="YYYY-YYYY"
        />
      </div>
    </div>
  );

  if (props.expIsSaved) {
    return (
      <div>
        <AddExpSave expList={props.experience} />
        <button className="btn btn-info btn-block w-auto mx-auto" onClick={props.handleEditExp}>
          <FontAwesomeIcon icon={faPen} className="mr-1" />Edit Experience
      </button>
      </div>
    );
  } else {
    return (
      <div>
        <div><FontAwesomeIcon icon={faBuilding} className="mr-1" />Experience</div>
        <AddExp expList={props.experience} />
        <button className="btn btn-info btn-block w-auto mx-auto" onClick={props.handleExpChange}>
          <FontAwesomeIcon icon={faPlus} className="mr-1" />Add Experience
      </button>
        <button className="btn btn-success btn-block w-auto mx-auto" onClick={props.handleSaveExp}>
          <FontAwesomeIcon icon={faCheck} className="mr-1" />Save Experience
      </button>
      </div>
    )
  }
};

export default ExpInfo;