import React from 'react';
import { Form, Radio, RadioGroup } from 'react-form';

class ResultPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div style={{ width: 550, margin: '0 auto' }}>
          <h4 style={{ textAlign: 'center', fontSize: 24 }}>Вузол А0 - тестові питання</h4>
        </div>
        <div style={{
          width: 550,
          overflowWrap: 'break-word',
          pointerEvents: 'none',
          margin: '0 auto',
          borderWidth: 5,
          borderColor: '#80b3ff',
          borderStyle: 'solid',
          padding: 20
        }}>
          <h4>Тест 1</h4>
          <h5>Назвіть типи даних в мові програмування JavaScript</h5>
          <Form onSubmit={this.submitHandler}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="radio-input-form">
                <RadioGroup field="userTestAnswer">
                  <label htmlFor="radio-first" className="mr-2">
                    <Radio value="first" id="radio-first" />
                    &nbsp;Long, short, boolean, null, integer, object, function 2
                  </label>
                  <label htmlFor="radio-second" className="mr-2">
                    <Radio value="second" id="radio-second" />
                    &nbsp;Integer, string, boolean, null, long, object 4
                  </label>
                  <label htmlFor="radio-third" className="mr-2">
                    <Radio value="third" id="radio-third" />
                    &nbsp;Number, string, boolean, null, undefined, function 5
                  </label>
                  <label htmlFor="radio-fourth" className="mr-2">
                    <Radio value="fourth" id="radio-fourth" />
                    &nbsp;Number, string, boolean, null, undefined, object 6
                  </label>
                  <label htmlFor="radio-fifth" className="mr-2">
                    <Radio value="fifth" id="radio-fifth" />
                    &nbsp;Integer, string, boolean, null, long, function 3
                  </label>
                  <label htmlFor="radio-sixth" className="mr-2">
                    <Radio value="sixth" id="radio-sixth" />
                    &nbsp;String, byte, short, null, integer, function 1
                  </label>
                </RadioGroup>
                <button type="submit" className="mb-4 btn btn-primary">
                  Відповісти
                </button>
              </form>
            )}
          </Form>
        </div>
        <div style={{ width: 750, margin: '0 auto' }}>
          <h4 style={{ marginTop: 10 }}>Після обробки результатів тесту {'\'Тест 1\''} система буде вирішувати,&nbsp;
            який лекційний матеріал буде подано наступним. Якщо модель учня <item>M<sub>1</sub></item> складає &le; 0.8,
            система зробить перехід на вузол С1 з подальшою рекомендацією повторення теми {'\'Типи даних\''}.&nbsp;
            Якщо модель учня <item>M<sub>1</sub></item> складає &ge; 0.8 -&nbsp;
            перехід на вузол С1 з подальшою пропозицією проходження теми {'\'Типи даних\''} більш поглиблено.
          </h4>
        </div>
        <div style={{ width: 450, margin: '0 auto' }}>
          <span style={{ fontSize: 24, display: 'inline-block', float: 'left' }}>
            <span style={{ fontSize: 30 }}>&#8601;</span>&nbsp;C1
          </span>
          <span style={{ textAlign: 'center', display: 'inline-block', fontSize: 24, float: 'right' }}>
            <span style={{ fontSize: 34 }}>&darr;</span>&nbsp;B2
          </span>
        </div>
        <div style={{ width: 850, margin: '0 auto', overflow: 'auto' }}>
          <div style={{
            wordWrap: 'break-word',
            width: 400,
            borderWidth: 5,
            borderColor: '#db5e5e',
            borderStyle: 'solid',
            padding: 20,
            float: 'left',
          }}>
            <div style={{ opacity: 0.5 }}>
              <h4>Масиви з числовими індексами</h4>
              <span>Масив - різновид {'об\'єкта'}, яка призначена для зберігання пронумерованих значень і пропонує додаткові методи для зручного маніпулювання такою колекцією...</span>
              <h6 style={{ color: 'brown', marginTop: 20 }}>Матеріал для повторення</h6>
              <span><a href="#" style={{ textDecoration: 'underline' }}>Типи данних</a></span>
            </div>
          </div>
          <div style={{
            wordWrap: 'break-word',
            width: 400,
            borderWidth: 5,
            borderColor: '#8cd9b3',
            borderStyle: 'solid',
            padding: 20,
            float: 'right'
          }}>
            <div style={{ opacity: 0.5 }}>
              <h4>Масиви з числовими індексами</h4>
              <span>Масив - різновид {'об\'єкта'}, яка призначена для зберігання пронумерованих значень і пропонує додаткові методи для зручного маніпулювання такою колекцією...</span>
              <h6 style={{ color: 'green', marginTop: 20 }}>Матеріал для поглибленого вивчення</h6>
              <span><a href="#" style={{ textDecoration: 'underline' }}>Типи данних</a></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
