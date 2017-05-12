import React from 'react';
import renderer from 'react-test-renderer';
import Flow from './Flow';
import updates from './__mocks__/updates';

it('App renders', () => {
  const component = renderer.create(<Flow updates={updates} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
