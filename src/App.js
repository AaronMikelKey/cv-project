import React, { Component } from 'react';
import './styles/App.css';
import './styles/Bootstrap.css'
import GenInfo from './components/GeneralInfo';
import EduInfo from './components/Education';
import ExpInfo from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      phone: "",
      email: "",
      genIsSaved: false,
      education: [
        {
          id: 0,
          school: "",
          title: "",
          date: ""
        },
      ],
      eduIsSaved: false,
      experience: [
        {
          id: 0,
          company: "",
          position: "",
          duties: "",
          date: ""
        }
      ],
      expIsSaved: false,
    };
    this.handleSaveGen = this.handleSaveGen.bind(this);
    this.handleEditGen = this.handleEditGen.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handleSaveEdu = this.handleSaveEdu.bind(this);
    this.handleEditEdu = this.handleEditEdu.bind(this);
  }

  handleSaveGen() {
    this.setState({ genIsSaved: true });
  }

  handleEditGen() {
    this.setState({ genIsSaved: false });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleEduChange = (e) => {
    e.preventDefault();
    const newEdu = {
      id: this.state.education.length,
      school: e.target.form.elements.school.value,
      title: e.target.form.elements.title.value,
      date: e.target.form.elements.date.value
    }
    this.setState({
      education: [...this.state.education, newEdu]
    });
  };
  handleSaveEdu = (e) => {
    e.preventDefault();
    if (e.target.form.elements.date.value !== "") {
      this.handleEduChange(e);
    }
    this.setState({
      eduIsSaved: true
    });
  };

  handleEditEdu(e) {
    e.preventDefault();
    this.setState({ 
      eduIsSaved: false
     });
  };


  render() {
    return (
      <div className="col-9 mx-auto mt-5">
        <form className="formBorder border-primary rounded p-3 mb-5">
          <legend>CV Form</legend>
          <div id="generalInfo">
            <GenInfo
              {...this.state}
              handleSaveGen={this.handleSaveGen}
              handleEditGen={this.handleEditGen}
              handleChange={this.handleChange}
            />
          </div>
          <hr />
          <div id="education">
            <EduInfo 
              {...this.state}
              handleEduChange={this.handleEduChange}
              handleSaveEdu={this.handleSaveEdu}
              handleEditEdu={this.handleEditEdu}
            />
          </div>
          <hr />
          <div id="experience">
            <ExpInfo {...this.state} />
          </div>
        </form>
      </div>
    );
  }
}

export default App;