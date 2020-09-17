import React from 'react'
import { Redirect } from 'react-router-dom'
import auth from './auth';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        
        return auth.isAuthenticated() ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;