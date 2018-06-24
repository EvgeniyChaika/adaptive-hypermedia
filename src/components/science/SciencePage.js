import React from 'react';
import { Circle } from 'react-shapes';

class SciencePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div style={{ overflow: 'auto' }}>
          <div style={{ float: 'left', marginLeft: 70, marginTop: 30 }}>
            <h4>Модель:</h4>
            <div>
              <h5>- учня <item>M<sub>1</sub></item></h5>
              <h5>- навчання <item>M<sub>2</sub></item></h5>
              <h5>- пояснення <item>M<sub>3</sub></item></h5>
              <h5>- еталонний курс <item>M<sub>e</sub></item></h5>
            </div>
          </div>
          <div style={{ float: 'right', marginRight: 70 }}>
            <h5>Психологічний портрет учня:</h5>
            <p>- сприйняття</p>
            <p>- увага</p>
            <p>- {"пам'ять"}</p>
            <p>- уява</p>
            <p>- мислення</p>
            <p>- воля</p>
            <p>- спрямованість</p>
            <p>- здібності</p>
            <p>- темперамент</p>
            <p>- характер</p>
            <p>- тощо</p>
          </div>
        </div>
        <div>
          <h5>Класифікація вузлів:</h5>
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
      </div>
    );
  }
}

export default SciencePage;
