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
            width: 440
          }}>
            <div>
              <h5>Навігаційні правила:</h5>
              <p>- правило шляху вузла</p>
              <p>- основне правило шляху вузла</p>
              <p>- призначене для користувача правило вузла</p>
              <p>- основне призначене для користувача правило</p>
            </div>
            <div style={{ marginTop: 20 }}>
              <h5>Локальне навігаційне правило користувача:</h5>
              <p style={{ color: 'blue' }}>{'0 < S(Mli, Mei) < 0.5 -> D7'}</p>
              <p style={{ color: 'blue' }}>{'0.5 <= S(Mli, Mei) <= 1 -> E8'}</p>
            </div>
            <div style={{ marginTop: 20 }}>
              <h5>Навігаційне правило вузла:</h5>
              <p style={{ color: 'blue' }}>{'A^C^A -> D7'}</p>
              <p style={{ color: 'blue' }}>{'A^B^A -> E8'}</p>
            </div>
          </div>
          <div style={{
            float: 'right',
            height: 600,
            width: 440
          }}>
            <h5>Приклад графа створенної навігації:</h5>
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
