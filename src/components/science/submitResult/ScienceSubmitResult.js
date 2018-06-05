import React from 'react';

class ScienceSubmitResult extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Результат Object {this.props.match}</h1>
      </div>
    );
  }
}

export default ScienceSubmitResult;
