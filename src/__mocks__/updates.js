export default [
  {
    type: 'master',
    y: 50,
    from: [],
    popup: true,
    content: 'Tag 0.1',
  },
  {
    type: 'develop',
    y: 100,
    from: [
      {
        type: 'master',
        y: 50,
      },
    ],
  },
  {
    type: 'develop',
    y: 150,
    from: [
      {
        type: 'develop',
        y: 100,
      },
    ],
  },
  {
    type: 'featureOne',
    y: 180,
    popup: true,
    content: 'Major feature for next release',
    from: [
      {
        type: 'develop',
        y: 150,
      },
    ],
  },
  {
    type: 'featureTwo',
    y: 190,
    popup: true,
    content: 'Feature for future release',
    from: [
      {
        type: 'develop',
        y: 150,
      },
    ],
  },
  {
    type: 'hotfix',
    y: 170,
    popup: true,
    content: 'Severe bug fixed for production: hotfix 0.2',
    from: [
      {
        type: 'master',
        y: 50,
      },
    ],
  },
  {
    type: 'develop',
    y: 200,
    popup: true,
    content: 'Incorporate bugfix in develop',
    from: [
      {
        type: 'hotfix',
        y: 170,
      },
      {
        type: 'develop',
        y: 150,
      },
    ],
  },
  {
    type: 'featureTwo',
    y: 225,
    from: [
      {
        type: 'featureTwo',
        y: 190,
      },
    ],
  },
  {
    type: 'master',
    y: 220,
    popup: true,
    content: 'Tag 0.2',
    from: [
      {
        type: 'master',
        y: 50,
      },
      {
        type: 'hotfix',
        y: 170,
      },
    ],
  },
  {
    type: 'featureOne',
    y: 240,
    from: [
      {
        type: 'featureOne',
        y: 180,
      },
    ],
  },
  {
    type: 'develop',
    y: 250,
    from: [
      {
        type: 'featureTwo',
        y: 225,
      },
      {
        type: 'develop',
        y: 200,
      },
    ],
  },
  {
    type: 'release',
    y: 290,
    popup: true,
    content: 'Start of release branch for 1.0. From this point on next release means the release after 1.0',
    from: [
      {
        type: 'develop',
        y: 250,
      },
    ],
  },
  {
    type: 'release',
    y: 340,
    from: [
      {
        type: 'release',
        y: 290,
      },
    ],
  },
  {
    type: 'featureOne',
    y: 370,
    from: [
      {
        type: 'featureOne',
        y: 240,
      },
    ],
  },
  {
    type: 'develop',
    y: 370,
    from: [
      {
        type: 'develop',
        y: 250,
      },
      {
        type: 'release',
        y: 340,
      },
    ],
  },
  {
    type: 'release',
    y: 395,
    popup: true,
    content: 'Only bugfixes',
    from: [
      {
        type: 'release',
        y: 340,
      },
    ],
  },
  {
    type: 'featureTwo',
    y: 430,
    from: [
      {
        type: 'develop',
        y: 370,
      },
    ],
  },
  {
    type: 'release',
    y: 450,
    popup: true,
    content: 'Bugfixes from release branch may be continuously merged back into develop',
    from: [
      {
        type: 'release',
        y: 395,
      },
    ],
  },
  {
    type: 'master',
    y: 470,
    popup: true,
    content: 'Tag 1.0',
    from: [
      {
        type: 'release',
        y: 450,
      },
      {
        type: 'master',
        y: 220,
      },
    ],
  },
  {
    type: 'featureTwo',
    y: 480,
    from: [
      {
        type: 'featureTwo',
        y: 430,
      },
    ],
  },
  {
    type: 'develop',
    y: 500,
    from: [
      {
        type: 'release',
        y: 450,
      },
      {
        type: 'develop',
        y: 370,
      },
    ],
  },
  {
    type: 'featureTwo',
    y: 520,
    from: [
      {
        type: 'featureTwo',
        y: 480,
      },
    ],
  },
  {
    type: 'featureOne',
    y: 530,
    from: [
      {
        type: 'featureOne',
        y: 370,
      },
    ],
  },
  {
    type: 'develop',
    y: 570,
    from: [
      {
        type: 'develop',
        y: 500,
      },
      {
        type: 'featureOne',
        y: 530,
      },
      {
        type: 'featureTwo',
        y: 520,
      },
    ],
  },
  {
    type: 'release',
    y: 600,
    from: [
      {
        type: 'develop',
        y: 570,
      },
    ],
  },
  {
    type: 'develop',
    y: 625,
    from: [
      {
        type: 'develop',
        y: 570,
      },
      {
        type: 'release',
        y: 600,
      },
    ],
  },
  {
    type: 'master',
    y: 650,
    from: [
      {
        type: 'release',
        y: 600,
      },
      {
        type: 'master',
        y: 470,
      },
    ],
  },
];
