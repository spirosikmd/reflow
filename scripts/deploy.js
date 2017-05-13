#!/usr/bin/env node

const ghpages = require('gh-pages');
const { author } = require('../package.json');
const dir = 'build';

process.env.NODE_DEBUG = 'gh-pages';

ghpages.publish(
  dir,
  {
    user: {
      name: author.name,
      email: author.email,
    },
  },
  function(err) {
    if (err) {
      console.error(err);
    }
  }
);
