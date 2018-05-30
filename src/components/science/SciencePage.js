import React from 'react';
import { Form, Radio, RadioGroup } from 'react-form';
import { Link } from 'react-router-dom';
import checkResultObjectBasic from '../../utils';

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
        <h3>Пример</h3>
        <h3>Назовите методы класса Object: </h3>

        <Form onSubmit={this.submitHandler}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id="radio-input-form">
              <RadioGroup field="submittedValueBasic">
                <label htmlFor="radio-first" className="mr-2">
                  1) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(long millis, int nanos)
                  <Radio value="first" id="radio-first" />
                </label>
                <label htmlFor="radio-second" className="mr-2">
                  2) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="second" id="radio-second" />
                </label>
                <label htmlFor="radio-third" className="mr-2">
                  3) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="third" id="radio-third" />
                </label>
                <label htmlFor="radio-fourth" className="mr-2">
                  4) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="fourth" id="radio-fourth" />
                </label>
                <label htmlFor="radio-fifth" className="mr-2">
                  5) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="fifth" id="radio-fifth" />
                </label>
                <label htmlFor="radio-sixth" className="mr-2">
                  6) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="sixth" id="radio-sixth" />
                </label>
                <label htmlFor="radio-seventh" className="mr-2">
                  7) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="seventh" id="radio-seventh" />
                </label>
                <label htmlFor="radio-eighth" className="mr-2">
                  8) clone, equals(Object obj), finalize, getClass, hashCode, notify, notifyAll,
                  toString, wait, wait(long millis), wait(int nanos)
                  <Radio value="eighth" id="radio-eighth" />
                </label>
              </RadioGroup>
              <Link to="/science/result" replace>
                <button type="submit" className="mb-4 btn btn-primary">
                  Submit
                </button>
              </Link>
            </form>
          )}
        </Form>
        {this.state.result > 50 &&
        <h4>Advanced</h4>
        }
      </div>
    );
  }
}

export default SciencePage;
