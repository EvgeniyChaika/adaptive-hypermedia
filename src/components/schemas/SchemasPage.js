import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Graph } from 'react-d3-graph';

import { graphConfig, graphData } from './../../consts';
import graphActions from '../../store/redux/graph/actions';
import { createGraphLink, createGraphNode } from '../../utils';

const options1 = [
  'Select node',
  'A 0'
];
const options2 = [
  'Select node',
  'B 1',
  'C 2'
];

class SchemasPage extends React.Component {
  static propTypes = {
    graphAddNode: PropTypes.func.isRequired,
    graph: PropTypes.object.isRequired
  };

  state = {
    actionDescription: '',
    sourceNode: '',
    targetNode: '',
    firstSelect: true,
    disabled: false
  };

  onClickNode = (nodeId) => {
    this.setState({ actionDescription: `Вузол ${nodeId} має навігаційний шлях - ` });
  };

  onMouseOverNode = (nodeId) => {
    this.setState({ actionDescription: `Вузол ${nodeId}` });
  };

  onMouseOverLink = (source, target) => {
    this.setState({ actionDescription: `Звʼязок поміж вузлом ${source} та вузлом ${target}` });
  };

  onChangeSourceNode = (e) => {
    this.setState({
      sourceNode: e.target.value
    });
  };

  onChangeTargetNode = (e) => {
    this.setState({
      targetNode: e.target.value
    });
  };

  submitNode = () => {
    const nodes = [];
    const sourceNode1 = createGraphNode(this.state.sourceNode);
    nodes.push(sourceNode1);
    if (this.state.firstSelect) {
      const sourceNode2 = createGraphNode(this.state.targetNode);
      nodes.push(sourceNode2);
      this.setState({ firstSelect: false });
    }
    const link = createGraphLink(this.state.sourceNode, this.state.targetNode);
    this.props.graphAddNode({ nodes, link });
    this.setState({ disabled: true });
  };

  render() {
    const { nodes } = this.props.graph;
    return (
      <div className="jumbotron">
        <div style={{ overflow: 'auto' }}>
          <div style={{
            float: 'left',
            height: 400,
            width: 440
          }}>
            <h4>Навігаційні правила вузла</h4>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-push-6">
                  <div className="form-group">
                    <select value={this.state.sourceNode} onChange={this.onChangeSourceNode} className="form-control">
                      {options1.map(option => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-push-6">
                  <div className="form-group">
                    <select value={this.state.targetNode} onChange={this.onChangeTargetNode} className="form-control">
                      {options2.map(option => <option value={option} key={option}>{option}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button disabled={this.state.disabled} onClick={this.submitNode}>Submit</button>
            </div>
          </div>
          <div style={{ float: 'right' }}>
            <h4>Приклад графу</h4>
            {nodes.length > 0 &&

              <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={this.props.graph}
                config={graphConfig}
                onClickNode={this.onClickNode}
                onMouseOverNode={this.onMouseOverNode}
                onMouseOverLink={this.onMouseOverLink}
              />
            }
            <h6>{this.state.actionDescription}</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  graphAddNode: graphActions.graphAddNode
};

export const mapStateToProps = state => ({
  graph: state.graph
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemasPage);
