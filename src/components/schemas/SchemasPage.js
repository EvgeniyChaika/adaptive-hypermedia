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

const initialState = {
  actionDescription: '',
  overallNavigationRule: '',
  sourceNode: '',
  targetNode: '',
  firstSelect: true,
  disabledButtonAddNode: true,
  disabledButtonFinishGraph: true,
  showGraphProperties: false,
  disabledSelectNode: false,
  nodePosition: 0
};

class SchemasPage extends React.Component {
  static propTypes = {
    graphAddNode: PropTypes.func.isRequired,
    graphClearData: PropTypes.func.isRequired,
    graph: PropTypes.object.isRequired
  };

  state = { ...initialState };

  onClickNode = (nodeId) => {
    this.setState({
      actionDescription: ``,
      overallNavigationRule: `Вузол ${nodeId} має навігаційне правило - ${nodeId + nodeId + nodeId}`
    });
  };

  onMouseOverNode = (nodeId) => {
    this.setState({
      actionDescription: `Вузол ${nodeId}`
    });
  };

  onMouseOverLink = (source, target) => {
    this.setState({
      actionDescription: `Звʼязок поміж вузлом ${source} та вузлом ${target}`
    });
  };

  onMouseOutLink = () => {
    this.setState({ actionDescription: '' });
  };

  onMouseOutNode = () => {
    this.setState({ actionDescription: '' });
  };

  onChangeSourceNode = (e) => {
    this.setState({
      sourceNode: e.target.value,
      disabledButtonAddNode: this.state.targetNode === ''
    });
  };

  onChangeTargetNode = (e) => {
    this.setState({
      targetNode: e.target.value,
      disabledButtonAddNode: this.state.sourceNode === ''
    });
  };

  onAddNode = () => {
    const { sourceNode, targetNode, firstSelect, nodePosition } = this.state;
    const nodes = [];
    const sourceNode1 = createGraphNode(sourceNode);
    nodes.push(sourceNode1);
    if (firstSelect) {
      const sourceNode2 = createGraphNode(targetNode);
      nodes.push(sourceNode2);
    }
    const link = createGraphLink(sourceNode, targetNode);
    this.props.graphAddNode({ nodes, link });
    this.setState({
      disabledButtonAddNode: true,
      disabledButtonFinishGraph: false,
      nodePosition: nodePosition + 1,
      firstSelect: false,
      disabledSelectNode: true
    });
  };

  onFinishGraph = () => {
    this.setState({ showGraphProperties: true, disabledButtonFinishGraph: true, disabledSelectNode: true });
  };

  onResetGraph = () => {
    this.props.graphClearData();
    this.setState({ ...initialState });
  };

  render() {
    const graphHasNodes = this.props.graph.nodes.length > 0;
    return (
      <div className="jumbotron" style={{ paddingBottom: 10 }}>
        <div style={{ overflow: 'auto' }}>
          <div style={{
            float: 'left',
            height: 500,
            width: 440
          }}>
            <h4>Вибір вузлів</h4>
            <div className="container">
              <div className="row">
                <div className="col-sm-7 col-sm-push-6" style={{ paddingLeft: 0 }}>
                  <div className="form-group">
                    <select
                      disabled={this.state.disabledSelectNode}
                      value={this.state.sourceNode}
                      onChange={this.onChangeSourceNode}
                      className="form-control"
                    >
                      <option value="" hidden>Вибрати начальний вузол</option>
                      <option value={`A ${this.state.nodePosition}`}>{`A ${this.state.nodePosition}`}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-7 col-sm-push-6" style={{ paddingLeft: 0 }}>
                  <div className="form-group">
                    <select
                      disabled={this.state.disabledSelectNode}
                      value={this.state.targetNode}
                      onChange={this.onChangeTargetNode}
                      className="form-control"
                    >
                      <option value="" hidden>Вибрати кінцевий вузол</option>
                      <option value={`B ${this.state.nodePosition + 1}`}>{`B ${this.state.nodePosition + 1}`}</option>
                      <option value={`C ${this.state.nodePosition + 1}`}>{`C ${this.state.nodePosition + 1}`}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ overflow: 'auto' }}>
              <div style={{ paddingBottom: 30, float: 'left' }}>
                <button disabled={this.state.disabledButtonAddNode} onClick={this.onAddNode} type="button" className="btn btn-primary">
                  {`Додати зв'язок`}
                </button>
              </div>
              <div style={{ paddingBottom: 30, float: 'right' }}>
                <button
                  disabled={this.state.disabledButtonFinishGraph}
                  onClick={this.onFinishGraph}
                  type="button"
                  className="btn btn-primary"
                >
                  Закінчити створення графу
                </button>
              </div>
            </div>
            {this.state.showGraphProperties &&
            <div>
              <div style={{ width: '100%', height: 75 }}>
                <h4>Елементи графа навігації</h4>
                <p style={{
                  fontFamily: 'Times New Roman, Times, serif',
                  fontStyle: 'italic',
                  color: '#966464'
                }}>
                  {this.state.actionDescription}
                </p>
              </div>
              <div style={{ width: '100%', height: 100 }}>
                <h4>Загальне навігаціне правило</h4>
                <p style={{
                  fontFamily: 'Times New Roman, Times, serif',
                  fontStyle: 'italic',
                  color: '#966464'
                }}>
                  {this.state.overallNavigationRule}
                </p>
              </div>
              <div>
                <button onClick={this.onResetGraph} type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                  Створити новий граф
                </button>
              </div>
            </div>
            }
          </div>
          <div style={{
            float: 'right',
            height: 500,
            width: 440
          }}>
            <h4>Граф створенної навігації</h4>
            {graphHasNodes &&
            <Graph
              id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
              data={this.props.graph}
              config={graphConfig}
              onClickNode={this.onClickNode}
              onMouseOverNode={this.onMouseOverNode}
              onMouseOutNode={this.onMouseOutNode}
              onMouseOverLink={this.onMouseOverLink}
              onMouseOutLink={this.onMouseOutLink}
            />
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  graphAddNode: graphActions.graphAddNode,
  graphClearData: graphActions.graphClearData
};

export const mapStateToProps = state => ({
  graph: state.graph
});

export default connect(mapStateToProps, mapDispatchToProps)(SchemasPage);
