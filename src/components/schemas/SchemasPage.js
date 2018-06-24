import React from 'react';
import { connect } from 'react-redux';
import { Graph } from 'react-d3-graph';

import { graphConfig, graphData } from './../../consts';
import graphActions from '../../store/redux/graph/actions';

const initialState = {
  actionDescription: '',
  overallNavigationRule: '',
  sourceNode: '',
  targetNode: '',
  disabledButtonAddNode: true,
  disabledButtonFinishGraph: true,
  showGraphProperties: false,
  disabledSelectNode: false,
  nodePosition: 0
};

class SchemasPage extends React.Component {
  render() {
    return (
      <div className="jumbotron" style={{ paddingBottom: 10 }}>
        <div style={{ overflow: 'auto' }}>
          <div style={{
            float: 'left',
            height: 600,
            width: 460
          }}>
            <div>
              <h4>Навігаційні правила:</h4>
              <h5>- правило шляху вузла</h5>
              <h5>- основне правило шляху вузла</h5>
              <h5>- призначене для користувача правило вузла</h5>
              <h5>- основне призначене для користувача правило</h5>
            </div>
            <div style={{ marginTop: 20 }}>
              <h5>Локальне навігаційне правило користувача:</h5>
              <p style={{ color: 'blue' }}>
                {'0 < S('}
                <item>M<sub>li</sub></item>
                , <item>M<sub>ei</sub></item>
                {') < 0.8'}&nbsp;&rarr;&nbsp;D7
              </p>
              <p style={{ color: 'blue', marginTop: 10 }}>
                0.8&nbsp;&le;&nbsp;S(
                <item>M<sub>li</sub></item>
                , <item>M<sub>ei</sub></item>
                )&nbsp;&le;&nbsp;1&nbsp;&rarr;&nbsp;E8
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <h5>Навігаційне правило вузла:</h5>
              <p style={{ color: 'blue' }}>&nbsp;A&and;{'C'}&and;A&nbsp;&rarr;&nbsp;D7</p>
              <p style={{ color: 'blue', marginTop: 10 }}>&nbsp;A&and;B&and;A&nbsp;&rarr;&nbsp;E8</p>
            </div>
          </div>
          <div style={{
            float: 'right',
            height: 600,
            width: 440
          }}>
            <h5>Граф:</h5>
            <div style={{ pointerEvents: 'none' }}>
              <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={graphData}
                config={graphConfig}
              />
            </div>
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
