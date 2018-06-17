import React from 'react';
import { Graph } from 'react-d3-graph';
import { graphConfig, graphData } from './../../consts';


class SchemasPage extends React.Component {
  state = {
    actionDescription: ''
  };

  onClickNode = (nodeId) => {
    this.setState({ actionDescription: `Clicked node ${nodeId}` });
  };

  onMouseOverNode = (nodeId) => {
    this.setState({ actionDescription: `Mouse over node ${nodeId}` });
  };

  onMouseOutNode = (nodeId) => {
    this.setState({ actionDescription: `Mouse out node ${nodeId}` });
  };

  onClickLink = (source, target) => {
    this.setState({ actionDescription: `Clicked link between ${source} and ${target}` });
  };

  onMouseOverLink = (source, target) => {
    this.setState({ actionDescription: `Mouse over in link between ${source} and ${target}` });
  };

  onMouseOutLink = (source, target) => {
    this.setState({ actionDescription: `Mouse out link between ${source} and ${target}` });
  };

  render() {
    return (
      <div className="jumbotron">
        <div style={{ overflow: 'auto' }}>
          <div style={{
            float: 'left',
            height: 813,
            width: 440
          }}>
            <h4>Схеми</h4>
          </div>
          <div style={{ float: 'right' }}>
            <h4>Приклад графу</h4>
            <div style={{ pointerEvents: 'none' }}>
              <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={graphData}
                config={graphConfig}
                onClickNode={this.onClickNode}
                onClickLink={this.onClickLink}
                onMouseOverNode={this.onMouseOverNode}
                onMouseOutNode={this.onMouseOutNode}
                onMouseOverLink={this.onMouseOverLink}
                onMouseOutLink={this.onMouseOutLink}
              />
            </div>
            <h6>{this.state.actionDescription}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default SchemasPage;
