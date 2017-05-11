import React, { PureComponent } from 'react';
import { Popup } from 'semantic-ui-react';

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
  featureTwo: 110,
  develop: 170,
  release: 230,
  hotfix: 290,
  master: 350,
  top: 30,
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
        develop: this.connectFeatureOneToDevelop.bind(this),
      },
    };
  }

  renderUpdate(cx, cy, fill, popup = false, content = '') {
    if (popup) {
      return (
        <Popup
          trigger={
            <circle
              cx={cx}
              cy={cy}
              r="10"
              stroke="black"
              strokeWidth="2"
              fill={fill}
            />
          }
          content={content}
          position="bottom center"
        />
      );
    }
    return <circle cx={cx} cy={cy} r="10" stroke="black" fill={fill} />;
  }

  renderDevelopUpdate(cy, popup, content) {
    return this.renderUpdate(timelines.develop, cy, '#FEE148', popup, content);
  }

  renderMasterUpdate(cy, popup, content) {
    return this.renderUpdate(timelines.master, cy, '#39E4F7', popup, content);
  }

  renderHotfixUpdate(cy, popup, content) {
    return this.renderUpdate(timelines.hotfix, cy, '#FB5B68', popup, content);
  }

  renderReleaseUpdate(cy, popup, content) {
    return this.renderUpdate(timelines.release, cy, '#57C132', popup, content);
  }

  renderFeatureOneUpdate(cy, popup, content) {
    return this.renderUpdate(
      timelines.featureOne,
      cy,
      '#FC73BF',
      popup,
      content
    );
  }

  renderFeatureTwoUpdate(cy, popup, content) {
    return this.renderUpdate(
      timelines.featureTwo,
      cy,
      '#FC73BF',
      popup,
      content
    );
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
        connectorsToRender = connectors.map(connector => {
          const connectorMethod = this.renderConnectorMethods[update.type][
            connector.type
          ];
          return connectorMethod(update.y, connector.y);
        });
      }
      const updateMethod = this.renderUpdateMethods[update.type];
      return connectorsToRender.concat(
        updateMethod(update.y, update.popup, update.content)
      );
    });
  }

  render() {
    const { updates } = this.props;

    return (
      <div>
        <svg width="100%" height="700" viewBox="0 0 400 700">
          <text x={timelines.featureOne + 10} y="20">
            feature
          </text>
          <text
            x={timelines.develop - 25}
            y="20"
            style={{ fontWeight: 'bold' }}
          >
            develop
          </text>
          <text x={timelines.release - 20} y="20">
            release
          </text>
          <text x={timelines.hotfix - 25} y="20">
            hotfixes
          </text>
          <text x={timelines.master - 20} y="20" style={{ fontWeight: 'bold' }}>
            master
          </text>

          {this.renderTimeline(timelines.featureOne, timelines.top)}
          {this.renderTimeline(timelines.featureTwo, timelines.top)}
          {this.renderTimeline(timelines.develop, timelines.top)}
          {this.renderTimeline(timelines.release, timelines.top)}
          {this.renderTimeline(timelines.hotfix, timelines.top)}
          {this.renderTimeline(timelines.master, timelines.top)}

          {updates && this.renderUpdates(updates)}
        </svg>
      </div>
    );
  }
}

export default Flow;
