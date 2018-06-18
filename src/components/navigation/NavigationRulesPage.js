import React from 'react';

class NavigationRulesPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div>
          <p style={{ marginTop: 15 }}>- правило шляху вузла</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>{'M1(P11^P1h^...^Pm1^Pmh)->M2(P1^...^Pn)'}</p>
          <p style={{ marginTop: 15 }}>- основне правило шляху вузла</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>{'M1(P11^P1h^...^Pm1^Pmh)->S(D1^...^Dn)'}</p>
          <p style={{ marginTop: 15 }}>- призначене для користувача правило вузла</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>{'e1#S(M1, Me)#e2->M2(P1^...^Pn)'}</p>
          <p style={{ marginTop: 15 }}>- основне призначене для користувача правило</p>
          <p style={{ marginTop: 10, color: 'blue', marginLeft: 15 }}>{'e1#S(Mli, Mei)#e2->S(D1^...^Dn)'}</p>
          <p style={{ marginTop: 25, marginLeft: 15 }}>
            де <span style={{ color: 'blue' }}>Pi</span> - дидактичний предикат безлічі M;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>D</span> - ідентифікатор узла, інформація якого буде показана користувачеві в рамках генерації
            стратегії навчання;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>h</span> - кількість історій, які були задіяні в моделі користувача
            <span style={{ color: 'blue' }}> M1</span>;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>m</span> - кількість образів шляху, кількість ідентифікаторів вузлів, які будуть
            показані {'суб\'єкту'} навчання згідно з <span style={{ color: 'blue' }}>Ме</span>;
          </p>
          <p style={{ marginTop: 10, marginLeft: 15 }}>
            <span style={{ color: 'blue' }}>S(Mli, Mei)</span> - параметр ступеня толерантності на <span style={{ color: 'blue' }}>i</span>м
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
