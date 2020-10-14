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
    this.handleSaveGen = this.handleSaveGen.bind(this);
    this.handleEditGen = this.handleEditGen.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
            <EduInfo {...this.state} />
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