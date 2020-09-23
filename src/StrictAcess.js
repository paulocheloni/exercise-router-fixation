import React from 'react';
import { Redirect } from 'react-router-dom';


class StrictAcess extends React.Component {
    render() {
        const {userName, passWord} = this.props.user;
        let status = 'any';
        (userName === 'João' && passWord === '123') 
        ? status = <span>loggedIn</span>
        : status = <div><span>Acess Denied</span><Redirect to="/"></Redirect></div>
        return (
        <div>{status}</div>
        )
    }
}

export default StrictAcess