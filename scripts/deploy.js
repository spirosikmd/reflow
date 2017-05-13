#!/usr/bin/env node

const { author } = require('../package.json');
const dist = 'dist';

ghpages.publish(
  dist,
  {
    user: {
      name: author.name,
      email: author.email,
    },
  },
  function(err) {}
);
