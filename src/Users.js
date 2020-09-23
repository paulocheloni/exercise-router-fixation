import React from 'react';

class Users extends React.Component {
  render() {
    const {greetingMessage }  = this.props;
    const { classID } = this.props.match.params;
    return (
      <div>
    <h2> Users </h2>
    <p> {greetingMessage}, {classID},  this is my awesome Users component </p>
    </div>
    )
  }
  
}

export default Users;