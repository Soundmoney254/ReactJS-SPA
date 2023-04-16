import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return <h3>Hi, I am a {this.props.class} Component!</h3>;
  }
}
export default ClassComponent;


