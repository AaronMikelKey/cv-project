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
          school: "",
          title: "",
          date: ""
        },
      ],
      eduIsSaved: false,
      experience: [
        {
          company: "",
          position: "",
          duties: "",
          date: ""
        }
      ],
      expIsSaved: false,
    };
    this.handleName = this.handleName.bind(this);
  }

  handleName = (e) => {
    this.setState({
      name: e.target.name,
    });
  };

  render() {
    //const { key, value } = this.state;

    return (
      <div className="col-9 mx-auto mt-5">
        <form className="formBorder border-primary rounded p-3 mb-5">
          <legend>CV Form</legend>
          <div id="generalInfo">
            <GenInfo />
          </div>
          <hr />
          <div id="education">
            <EduInfo />
          </div>
          <hr />
          <div id="experience">
            <ExpInfo />
          </div>
        </form>
      </div>
    );
  }
}

export default App;