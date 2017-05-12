export default [
  {
    type: 'master',
    y: 50,
    popup: true,
    content: 'Tag 0.1',
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
    popup: true,
    content: 'Major feature for next release',
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
    popup: true,
    content: 'Feature for future release',
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
    popup: true,
    content: 'Severe bug fixed for production: hotfix 0.2',
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
    popup: true,
    content: 'Incorporate bugfix in develop',
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
    popup: true,
    content: 'Tag 0.2',
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
    popup: true,
    content: 'Start of release branch for 1.0. From this point on next release means the release after 1.0',
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
    popup: true,
    content: 'Only bugfixes',
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
    popup: true,
    content: 'Bugfixes from release branch may be continuously merged back into develop',
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
    popup: true,
    content: 'Tag 1.0',
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
];
