import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('App renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('App isTheEnd returns true when step equals updates length', () => {
  const app = new App();
  expect(app.isTheEnd({ step: 2 }, [{}, {}])).toBe(true);
});

it('App isTheEnd returns false when step does not equal updates length', () => {
  const app = new App();
  expect(app.isTheEnd({ step: 1 }, [{}, {}])).toBe(false);
});

it('App isTheStart returns true when step equals 0', () => {
  const app = new App();
  expect(app.isTheStart({ step: 0 })).toBe(true);
});

it('App isTheStart returns true when step does not equal 0', () => {
  const app = new App();
  expect(app.isTheStart({ step: 2 })).toBe(false);
});

it('App handleForwardClick does not call setState when is the end', () => {
  const app = new App();
  app.setState = jest.fn();
  app.isTheEnd = jest.fn().mockReturnValue(true);
  app.handleForwardClick();
  expect(app.setState).not.toHaveBeenCalled();
});

it('App handleForwardClick calls setState with new updates and step', () => {
  const app = new App();
  app.setState = jest.fn();
  app.isTheEnd = jest.fn().mockReturnValue(false);
  app.handleForwardClick({ step: 1, updates: [{}] }, [{}, {}]);
  expect(app.setState).toHaveBeenCalledWith({
    updates: [{}, {}],
    step: 2,
  });
});

it('App handleBackwardClick does not call setState when is the start', () => {
  const app = new App();
  app.setState = jest.fn();
  app.isTheStart = jest.fn().mockReturnValue(true);
  app.handleBackwardClick();
  expect(app.setState).not.toHaveBeenCalled();
});

it('App handleBackwardClick calls setState with new updates and step', () => {
  const app = new App();
  app.setState = jest.fn();
  app.isTheStart = jest.fn().mockReturnValue(false);
  app.handleBackwardClick({ step: 2, updates: [{}, {}] });
  expect(app.setState).toHaveBeenCalledWith({
    updates: [{}],
    step: 1,
  });
});

it('App handlerResetClick resets updates and step', () => {
  const app = new App();
  app.setState = jest.fn();
  app.handlerResetClick();
  expect(app.setState).toHaveBeenCalledWith({ step: 0, updates: [] });
});

it('App getUpdateIcon returns correct icon given on update type', () => {
  const app = new App();
  expect(app.getUpdateIcon({ type: 'hotfix' })).toBe('bug');
  expect(app.getUpdateIcon({ type: 'master' })).toBe('rocket');
  expect(app.getUpdateIcon({ type: 'develop' })).toBe('code');
});
