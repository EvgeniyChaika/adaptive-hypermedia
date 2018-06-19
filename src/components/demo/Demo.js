import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Radio, RadioGroup } from 'react-form';

import userActions from '../../store/redux/user/actions';

const mapAnswers = {
  first: 33.3,
  second: 66.6,
  third: 83.3,
  fourth: 100,
  fifth: 50,
  sixth: 16.5
};

class Demo extends React.Component {
  static propTypes = {
    userModel: PropTypes.object.isRequired,
    userSetTestTypesResult: PropTypes.func.isRequired
  };

  state = {
    navigationPath: 'A2B2'
  };

  submitHandler = ({ userTestAnswer }) => {
    const result = mapAnswers[userTestAnswer];
    this.props.userSetTestTypesResult(result);
  };

  render() {
    return (
      <div className="jumbotron">
        <div style={{ overflow: 'auto' }}>
          <div style={{ float: 'left', width: 550, overflowWrap: 'break-word' }}>
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
          <div style={{ float: 'right', width: 350 }}>
            <div>
              <h4>Модель користувача:</h4>
              <p>- загальний рівень</p>
              <p>{this.props.userModel.overallLevel}</p>
              <p>- результат тесту {'\'Типи даних в мові програмування JavaScript\''}</p>
              <p>{this.props.userModel.testTypes}</p>
            </div>
            <div>
              <h4>Навігаційний шлях:</h4>
              <p>{this.state.navigationPath}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  userSetTestTypesResult: userActions.userSetTestTypesResult
};

const mapStateToProps = state => ({
  userModel: state.user.userModel
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
