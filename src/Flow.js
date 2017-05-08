import React, { PureComponent } from 'react';

const style = {
  connector: {
    stroke: 'rgb(0, 0, 0)',
    strokeWidth: 1,
  },
  timeline: {
    stroke: 'rgb(208, 208, 208)',
    strokeWidth: 1,
  },
};

const timelines = {
  featureOne: 50,
  featureTwo: 100,
  develop: 150,
  release: 200,
  hotfix: 250,
  master: 300,
};

class Flow extends PureComponent {
  constructor(props) {
    super(props);

    this.renderUpdateMethods = {
      master: this.renderMasterUpdate.bind(this),
      develop: this.renderDevelopUpdate.bind(this),
      hotfix: this.renderHotfixUpdate.bind(this),
      release: this.renderReleaseUpdate.bind(this),
      featureOne: this.renderFeatureOneUpdate.bind(this),
      featureTwo: this.renderFeatureTwoUpdate.bind(this),
    };

    this.renderConnectorMethods = {
      master: {
        master: this.connectMasterToMaster.bind(this),
        develop: this.connectMasterToDevelop.bind(this),
      },
      develop: {
        develop: this.connectDevelopToDevelop.bind(this),
        release: this.connectDevelopToRelease.bind(this),
        featureOne: this.connectDevelopToFeatureOne.bind(this),
        featureTwo: this.connectDevelopToFeatureTwo.bind(this),
      },
      hotfix: {
        develop: this.connectHotfixToDevelop.bind(this),
        master: this.connectHotfixToMaster.bind(this),
      },
      release: {
        release: this.connectRelaseToRelease.bind(this),
        develop: this.connectReleaseToDevelop.bind(this),
        master: this.connectReleaseToMaster.bind(this),
      },
      featureTwo: {
        featureTwo: this.connectFeatureTwoToFeatureTwo.bind(this),
        develop: this.connectFeatureTwoToDevelop.bind(this),
      },
      featureOne: {
        featureOne: this.connectFeatureOneToFeatureOne.bind(this),
        develop: this.connectFeatureOneToDevelop.bind(this)
      }
    };
  }

  renderUpdate(cx, cy, fill) {
    return <circle cx={cx} cy={cy} r="10" stroke="black" fill={fill} />;
  }

  renderDevelopUpdate(cy) {
    return this.renderUpdate(timelines.develop, cy, '#FEE148');
  }

  renderMasterUpdate(cy) {
    return this.renderUpdate(timelines.master, cy, '#39E4F7');
  }

  renderHotfixUpdate(cy) {
    return this.renderUpdate(timelines.hotfix, cy, '#FB5B68');
  }

  renderReleaseUpdate(cy) {
    return this.renderUpdate(timelines.release, cy, '#57C132');
  }

  renderFeatureOneUpdate(cy) {
    return this.renderUpdate(timelines.featureOne, cy, '#FC73BF');
  }

  renderFeatureTwoUpdate(cy) {
    return this.renderUpdate(timelines.featureTwo, cy, '#FC73BF');
  }

  renderConnector(x1, y1, x2, y2) {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} style={style.connector} />;
  }

  renderTimeline(x1, y1) {
    return (
      <line x1={x1} y1={y1} x2={x1} y2={y1 + 650} style={style.timeline} />
    );
  }

  connectDevelopToDevelop(cy1, cy2) {
    return this.renderConnector(timelines.develop, cy1, timelines.develop, cy2);
  }

  connectMasterToDevelop(cy1, cy2) {
    return this.renderConnector(timelines.master, cy1, timelines.develop, cy2);
  }

  connectHotfixToDevelop(cy1, cy2) {
    return this.renderConnector(timelines.hotfix, cy1, timelines.develop, cy2);
  }

  connectHotfixToMaster(cy1, cy2) {
    return this.renderConnector(timelines.hotfix, cy1, timelines.master, cy2);
  }

  connectDevelopToRelease(cy1, cy2) {
    return this.renderConnector(timelines.develop, cy1, timelines.release, cy2);
  }

  connectRelaseToRelease(cy1, cy2) {
    return this.renderConnector(timelines.release, cy1, timelines.release, cy2);
  }

  connectReleaseToDevelop(cy1, cy2) {
    return this.renderConnector(timelines.release, cy1, timelines.develop, cy2);
  }

  connectMasterToMaster(cy1, cy2) {
    return this.renderConnector(timelines.master, cy1, timelines.master, cy2);
  }

  connectReleaseToMaster(cy1, cy2) {
    return this.renderConnector(timelines.release, cy1, timelines.master, cy2);
  }

  connectDevelopToFeatureOne(cy1, cy2) {
    return this.renderConnector(
      timelines.develop,
      cy1,
      timelines.featureOne,
      cy2
    );
  }

  connectDevelopToFeatureTwo(cy1, cy2) {
    return this.renderConnector(
      timelines.develop,
      cy1,
      timelines.featureTwo,
      cy2
    );
  }

  connectFeatureTwoToFeatureTwo(cy1, cy2) {
    return this.renderConnector(
      timelines.featureTwo,
      cy1,
      timelines.featureTwo,
      cy2
    );
  }

  connectFeatureTwoToDevelop(cy1, cy2) {
    return this.renderConnector(
      timelines.featureTwo,
      cy1,
      timelines.develop,
      cy2
    );
  }

  connectFeatureOneToFeatureOne(cy1, cy2) {
    return this.renderConnector(
      timelines.featureOne,
      cy1,
      timelines.featureOne,
      cy2
    );
  }

  connectFeatureOneToDevelop(cy1, cy2) {
    return this.renderConnector(
      timelines.featureOne,
      cy1,
      timelines.develop,
      cy2
    );
  }

  renderUpdates(updates) {
    return updates.map(update => {
      const connectors = update.connectors;
      let connectorsToRender = [];
      if (connectors) {
        connectorsToRender = update.connectors.map(connector => {
          const connectorMethod = this.renderConnectorMethods[update.type][
            connector.type
          ];
          return connectorMethod(update.y, connector.y);
        });
      }
      const updateMethod = this.renderUpdateMethods[update.type];
      return connectorsToRender.concat(updateMethod(update.y));
    });
  }

  render() {
    const { updates } = this.props;

    return (
      <div>
        <svg width="350" height="650" viewBox="0 0 350 650">
          <text x="125" y="18">
            develop
          </text>
          <text x="275" y="18">
            master
          </text>

          {this.renderTimeline(timelines.featureOne, 20)}
          {this.renderTimeline(timelines.featureTwo, 20)}
          {this.renderTimeline(timelines.develop, 20)}
          {this.renderTimeline(timelines.release, 20)}
          {this.renderTimeline(timelines.hotfix, 20)}
          {this.renderTimeline(timelines.master, 20)}

          {this.renderUpdates(updates)}
        </svg>
      </div>
    );
  }
}

export default Flow;
