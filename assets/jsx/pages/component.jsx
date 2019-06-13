import React from 'react';
import { connect } from 'react-redux';
// import { Form, Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'
import GlobalComponent from '../components/global/GlobalComponent.jsx';


class Component extends React.Component {

  handleClick = async() => {
    this.props.handleClick()
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.props.handleSubmit()
  }

  handleChange = (event) => {
    this.props.handleChange(event)
  }

    render() {
        return (
          <div>{this.props.submitted?
            <div className="ui segment">
            <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
            </div>
            <p></p>
            </div>
          :
            <div className='formWrapper'>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder='Email' />
            <input type='password' onChange={this.handleChange}id='password' placeholder='Password' />
            <input type='password' onChange={this.handleChange} placeholder='PasswordConfirmation' />
            <button className="submitButton" type='submit'>Submit</button>

          <div>
          {this.props.fetchError?
            <Button onClick={this.handleClick} className='uiButton'>
            Errors: Click Here
            <div></div>
            </Button>
          :
            <Button className='uiButton'>
            No Errors
            </Button>
          }
          </div>
          <div>
          {this.props.showErrorMessage?
          <div style={{textAlign:'center'}}>{this.props.specificError}</div>
          :
          <div></div>
          }
          </div>
          </form>
          </div>
        }</div>
      )
    }
  }



// Component = reduxForm({
//     form: 'LoginForm',
// })(Component);

export default connect(() => ({
}))(Component);
