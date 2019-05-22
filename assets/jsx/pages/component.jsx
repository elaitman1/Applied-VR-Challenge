import React from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import GlobalComponent from '../components/global/GlobalComponent';


class Application extends GlobalComponent {
    render() {
        return (
            <h1 style={{ textAlign: 'center' }}>Hello World</h1>
        );
    }
};

Application = reduxForm({
    form: 'LoginForm',
})(Application);

export default connect(() => ({
}))(Application);
