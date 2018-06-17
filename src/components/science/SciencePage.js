import React from 'react';
import { Circle } from 'react-shapes';
import { checkResultObjectBasic } from '../../utils';

class SciencePage extends React.Component {
  state = {
    submittedValueBasic: '',
    result: 0
  };

  submitHandler = ({ submittedValueBasic }) => {
    this.setState({ submittedValueBasic });
    const result = checkResultObjectBasic(this.state.submittedValueBasic);
    console.log(this.state.submittedValueBasic);
    this.setState({ result });
    console.log(this.state.result);
  };

  render() {
    return (
      <div className="jumbotron">
        <h3>Класифікація вузлів:</h3>
        <div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#80b3ff' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> A - вузли з питанням (тестовим завданням)</span>
          </div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#8cd9b3' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> B - вузли, що містять інформацію для правильної відповіді учня</span>
          </div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#ff9999' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> C - вузли з інформацією для неправильної відповіді учня</span>
          </div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#d6d6c2' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> D - вузли з поясненням для студентів з низьким рівнем знань</span>
          </div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#ffb366' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> E - вузли з поясненням для студентів з високим рівнем знань</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SciencePage;
