import React from 'react';
import Component from '../../pages/component.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class GlobalComponent extends React.Component {
    state = {
      Email: "",
      Password: "",
      PasswordConfirmation: "",
      fetchError:false,
      submitted: null,
      specificError:null,
      showErrorMessage: false
    }

    handleClick = async() => {
      await this.setState({showErrorMessage:!this.state.showErrorMessage})
    }

    handleChange = (event) => {
          this.setState({
            [event.target.placeholder]: event.target.value
          })
    }

    handleSubmit = async (event) => {
      try{
          await this.setState({submitted: true, fetchError: false})

          await fetch('https://api-dev.appliedvr.io/dev_challenge/mock_login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
          })
        })
      }catch(error){
        await this.setState({submitted: false, fetchError: !this.state.fetchError, specificError:error.toString()})
        }
      }

      render() {
        console.log(this.state.showErrorMessage)
          return (
            <Router>
                <Route exact path="/" render={props =><Component
                  handleChange={this.handleChange}
                  handleErrorMessage={this.handleErrorMessage} handleChange={this.handleChange}
                  handleClick={this.handleClick}
                  handleSubmit={this.handleSubmit}
                  email={this.state.Email}
                  password={this.state.Password}
                  passwordConfirmation={this.state.PasswordConfirmation}
                  fetchError={this.state.fetchError}
                  submitted={this.state.submitted}
                  specificError={this.state.specificError}
                  showErrorMessage={this.state.showErrorMessage}
                />} />
            </Router>
          );
      }
  }
