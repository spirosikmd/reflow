import React, { PureComponent } from 'react';
import Flow from './Flow';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      updates: [
        {
          type: 'master',
          y: 50,
          connectors: [
            {
              type: 'develop',
              y: 100,
            },
            {
              type: 'master',
              y: 220,
            },
          ],
        },
        {
          type: 'develop',
          y: 100,
          connectors: [
            {
              type: 'develop',
              y: 150,
            },
          ],
        },
        {
          type: 'develop',
          y: 150,
          connectors: [
            {
              type: 'develop',
              y: 200,
            },
            {
              type: 'featureTwo',
              y: 190,
            },
            {
              type: 'featureOne',
              y: 180,
            },
          ],
        },
        {
          type: 'featureOne',
          y: 180,
          connectors: [
            {
              type: 'featureOne',
              y: 240,
            },
          ],
        },
        {
          type: 'featureTwo',
          y: 190,
          connectors: [
            {
              type: 'featureTwo',
              y: 220,
            },
          ],
        },
        {
          type: 'hotfix',
          y: 170,
          connectors: [
            {
              type: 'develop',
              y: 200,
            },
            {
              type: 'master',
              y: 220,
            },
          ],
        },
        {
          type: 'develop',
          y: 200,
          connectors: [
            {
              type: 'develop',
              y: 250,
            },
          ],
        },
        {
          type: 'featureTwo',
          y: 220,
          connectors: [
            {
              type: 'develop',
              y: 250,
            },
          ],
        },
        {
          type: 'master',
          y: 220,
          connectors: [
            {
              type: 'master',
              y: 470,
            },
          ],
        },
        {
          type: 'featureOne',
          y: 240,
          connectors: [
            {
              type: 'featureOne',
              y: 370,
            },
          ],
        },
        {
          type: 'develop',
          y: 250,
          connectors: [
            {
              type: 'release',
              y: 290,
            },
            {
              type: 'develop',
              y: 370,
            },
          ],
        },
        {
          type: 'release',
          y: 290,
          connectors: [
            {
              type: 'release',
              y: 340,
            },
          ],
        },
        {
          type: 'release',
          y: 340,
          connectors: [
            {
              type: 'develop',
              y: 370,
            },
            {
              type: 'release',
              y: 410,
            },
          ],
        },
        {
          type: 'featureOne',
          y: 370,
          connectors: [
            {
              type: 'featureOne',
              y: 520,
            },
          ],
        },
        {
          type: 'develop',
          y: 370,
          connectors: [
            {
              type: 'develop',
              y: 500,
            },
            {
              type: 'featureTwo',
              y: 430,
            },
          ],
        },
        {
          type: 'release',
          y: 410,
          connectors: [
            {
              type: 'release',
              y: 450,
            },
          ],
        },
        {
          type: 'featureTwo',
          y: 430,
          connectors: [
            {
              type: 'featureTwo',
              y: 480,
            },
          ],
        },
        {
          type: 'release',
          y: 450,
          connectors: [
            {
              type: 'master',
              y: 470,
            },
            {
              type: 'develop',
              y: 500,
            },
          ],
        },
        {
          type: 'master',
          y: 470,
          connectors: [
            {
              type: 'master',
              y: 620,
            },
          ],
        },
        {
          type: 'featureTwo',
          y: 480,
          connectors: [
            {
              type: 'featureTwo',
              y: 520,
            },
          ],
        },
        {
          type: 'develop',
          y: 500,
          connectors: [
            {
              type: 'develop',
              y: 550,
            },
          ],
        },
        {
          type: 'featureTwo',
          y: 520,
          connectors: [
            {
              type: 'develop',
              y: 550,
            },
          ],
        },
        {
          type: 'featureOne',
          y: 530,
          connectors: [
            {
              type: 'develop',
              y: 550,
            },
          ],
        },
        {
          type: 'develop',
          y: 550,
          connectors: [
            {
              type: 'develop',
              y: 600,
            },
            {
              type: 'release',
              y: 570,
            },
          ],
        },
        {
          type: 'release',
          y: 570,
          connectors: [
            {
              type: 'develop',
              y: 600,
            },
            {
              type: 'master',
              y: 620,
            },
          ],
        },
        {
          type: 'develop',
          y: 600,
        },
        {
          type: 'master',
          y: 620,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Flow updates={this.state.updates} />
      </div>
    );
  }
}

export default App;
