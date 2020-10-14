import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faPlus, faCheck, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faGraduationCap, faPlus, faCheck, faPen)

const EduInfo = (props) => {
  const AddEduSave = ({ eduList }) => (
    <div>
      {eduList.map(edu => (
        <div key={edu.id} >
          <strong>{edu.school}</strong><br />
          {edu.title}<br />
          {edu.date}
        </div>
      ))}
    </div>
  )
  const AddEdu = ({ eduList }) => (
    <div>
      {eduList.map(edu => (
        <div key={edu.id} >
          <strong>{edu.school}</strong><br />
          {edu.title}<br />
          {edu.date}
        </div>
      ))}
      <div className="input-group mb-3">
        <input type="text"
          name="school"
          aria-label="School"
          className="form-control"
          placeholder="School"
        />
        <input type="text"
          name="title"
          aria-label="Degree"
          className="form-control"
          placeholder="Degree"
        />
        <input type="text"
          name="date"
          aria-label="Years"
          className="form-control"
          placeholder="YYYY-YYYY"
        />
      </div>
    </div>
  );

  if (props.eduIsSaved) {
    return (
      <div>
        <AddEduSave eduList={props.education} />
        <button className="btn btn-info btn-block w-auto mx-auto" onClick={props.handleEditEdu}>
          <FontAwesomeIcon icon={faPen} className="mr-1" />Edit Education
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div><FontAwesomeIcon icon={faGraduationCap} className="mr-1" />Education</div>
        <AddEdu eduList={props.education} />
        <button className="btn btn-info btn-block w-auto mx-auto" onClick={props.handleEduChange}>
          <FontAwesomeIcon icon={faPlus} className="mr-1" />Add Education
        </button>
        <button className="btn btn-success btn-block w-auto mx-auto" onClick={props.handleSaveEdu}>
          <FontAwesomeIcon icon={faCheck} className="mr-1" />Save Education
        </button>
      </div>
    )
  }
};

export default EduInfo;
