import React from 'react';

class NavigationRulesPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <p style={{ marginTop: 15 }}>- правило шляху вузла</p>
          <p style={{
            marginTop: 10,
            color: 'blue',
            marginLeft: 15
          }}>
            <item>M<sub>1</sub></item>
            (
            <item>P<sub>11</sub></item>
            &and;
            <item>P<sub>1h</sub></item>
            &and;...&and;
            <item>P<sub>m1</sub></item>
            &and;
            <item>P<sub>mh</sub></item>
            {')-> '}
            <item>M<sub>2</sub></item>
            (
            <item>P<sub>1</sub></item>
            &and;...
            &and;
            <item>P<sub>n</sub></item>
            )
          </p>
          <p style={{ marginTop: 15 }}>- основне правило шляху вузла</p>
          <p style={{
            marginTop: 10,
            color: 'blue',
            marginLeft: 15
          }}>
            <item>M<sub>1</sub></item>
            (
            <item>P<sub>11</sub></item>
            &and;
            <item>P<sub>1h</sub></item>
            &and;...&and;
            <item>P<sub>m1</sub></item>
            &and;
            <item>P<sub>mh</sub></item>
            {')-> S('}
            <item>D<sub>1</sub></item>
            &and;...&and;
            <item>D<sub>n</sub></item>
            )
          </p>
          <p style={{ marginTop: 15 }}>- призначене для користувача правило вузла</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>
            <item>e<sub>1</sub></item>
            #S(
            <item>M<sub>1</sub></item>
            , <item>M<sub>e</sub></item>)#
            <item>e<sub>2</sub></item>
            {' -> '}
            <item>M<sub>2</sub></item>
            (
            <item>P<sub>1</sub></item>
            &and;...&and;
            <item>P<sub>n</sub></item>
            )
          </p>
          <p style={{ marginTop: 15 }}>- основне призначене для користувача правило</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>
            <item>e<sub>1</sub></item>
            #S(
            <item>M<sub>li</sub></item>
            , <item>M<sub>ei</sub></item>)#
            <item>e<sub>2</sub></item>
            {' -> S('}
            <item>D<sub>1</sub></item>
            &and;...&and;
            <item>D<sub>n</sub></item>
            )
          </p>
          <p style={{ marginTop: 25, marginLeft: 15 }}>
            де <span style={{ color: 'blue' }}><item>P<sub>i</sub></item></span> - дидактичний предикат множини
            <span style={{ color: 'blue' }}> M</span>;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>D</span> - ідентифікатор узла, інформація якого буде показана користувачеві в рамках генерації
            стратегії навчання;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>h</span> - кількість історій, які були задіяні в моделі користувача
            <span style={{ color: 'blue' }}><item> M<sub>1</sub></item></span>;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>m</span> - кількість образів шляху, кількість ідентифікаторів вузлів, які будуть
            показані {'суб\'єкту'} навчання згідно з <span style={{ color: 'blue' }}><item>M<sub>e</sub></item></span>;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>S(<item>M<sub>li</sub></item>, <item>M<sub>ei</sub></item>)</span> - параметр ступеня
            толерантності на <span style={{ color: 'blue' }}>i-</span>м
            кроці, <span style={{ color: 'blue' }}>е</span> - межа ступені
            толерантності в межах від 0 до 1;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>#</span> - операція, яка представляється одним з наступних трьох логічних
            операторів: {'\'<\''}, {'\'<=\''} або {'\'=\''};
          </p>
        </div>
      </div>
    );
  }
}

export default NavigationRulesPage;
