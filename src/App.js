import React, { Component } from 'react';
import './App.css';
import './Bootstrap.css'
import { General } from './components/GeneralInfo';
import { Education } from './components/Education';
import { Experience } from './components/Experience';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      phone: "",
      email: "",
      education: [
        {
          school: "",
          title: "",
          date: ""
        },
      ],
      experience: [
        {
          company: "",
          position: "",
          duties: "",
          date: ""
        }
      ],
    };
  }

  render() {
    const { key, value } = this.state;
    
    return (
      <div className="col-9 mx-auto mt-5">
        <form className="formBorder border-primary rounded p-3 mb-5">
          <legend>CV Form</legend>
          <div className="form-group">
            <label htmlFor="nameInput"><i className="fa fa-user mr-1"></i>Name</label>
            <input type="text" id="nameInput" className="form-control form-control-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="addressInput"><i className="fa fa-address-card-o mr-1"></i>Address</label>
            <input type="text" id="addressInput" className="form-control form-control-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneInput"><i className="fa fa-phone mr-1"></i>Phone Number</label>
            <input type="text" id="phoneInput" className="form-control form-control-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="emailInput"><i className="fa fa-envelope mr-1"></i>Email</label>
            <input type="text" id="emailInput" className="form-control form-control-sm" />
          </div>
          <button className="btn btn-success btn-block w-auto mx-auto"><i className="fa fa-check mr-1"></i>Save General Info</button>
          <hr />
          <span><i className="fa fa-graduation-cap mr-1"></i>Education</span>
          <div className="input-group mb-3">
            <input type="text" aria-label="School" className="form-control" placeholder="School" />
            <input type="text" aria-label="Degree" className="form-control" placeholder="Degree" />
            <input type="text" aria-label="Years" className="form-control" placeholder="Years" />
          </div>
          <button className="btn btn-info btn-block w-auto mx-auto"><i className="fa fa-plus mr-1"></i>Add Education</button>
          <button className="btn btn-success btn-block w-auto mx-auto"><i className="fa fa-check mr-1"></i>Save Education</button>
          <hr />
          <span><i className="fa fa-building mr-1"></i>Experience</span>
          <div className="input-group mb-3">
            <input type="text" aria-label="Employer" className="form-control" placeholder="Employer" />
            <input type="text" aria-label="Position" className="form-control" placeholder="Position" />
            <input type="text" aria-label="Years" className="form-control" placeholder="Years" />
          </div>
          <button className="btn btn-info btn-block w-auto mx-auto"><i className="fa fa-plus mr-1"></i>Add Work Experience</button>
          <button className="btn btn-success btn-block w-auto mx-auto"><i className="fa fa-check mr-1"></i>Save Work Experience</button>
        </form>
      </div>
    );
  }
}

export default App;