import React from 'react';
import { Circle } from 'react-shapes';

class SciencePage extends React.Component {
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
            <Circle r={8} fill={{ color: '#db5e5e' }} />
            <span style={{ height: '100%', margin: '0 auto' }}> C - вузли з інформацією для неправильної відповіді учня</span>
          </div>
          <div style={{ height: 30 }}>
            <Circle r={8} fill={{ color: '#7a6565' }} />
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
