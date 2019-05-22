import React from 'react';
import { connect } from 'react-redux';
import GlobalComponent from '../../../components/global/GlobalComponent';


class Application extends GlobalComponent {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <h1 style={{ textAlign: 'center' }}>404 Error</h1>
                <h2 style={{ textAlign: 'center' }}>Page Not Found</h2>
            </div>
        );
    }
};

export default connect(() => ({}))(Application)
