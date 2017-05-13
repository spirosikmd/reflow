import React, { PureComponent } from 'react';
import Flow from './Flow';
import mockUpdates from './__mocks__/updates';
import { Button, Grid, List } from 'semantic-ui-react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      step: 0,
    };
  }

  isTheEnd(state, updates) {
    return state.step === updates.length;
  }

  isTheStart(state) {
    return state.step === 0;
  }

  handleForwardClick(state, updates) {
    if (this.isTheEnd(state, updates)) {
      return;
    }
    const newUpdates = [...state.updates, updates[state.step]];
    const step = state.step + 1;
    this.setState({ updates: newUpdates, step });
  }

  handleBackwardClick(state) {
    if (this.isTheStart(state)) {
      return;
    }
    const newUpdates = state.updates.slice(0, state.updates.length - 1);
    const step = state.step - 1;
    this.setState({ updates: newUpdates, step });
  }

  handlerResetClick() {
    this.setState({
      updates: [],
      step: 0,
    });
  }

  getUpdateIcon(update) {
    switch (update.type) {
      case 'hotfix':
        return 'bug';
      case 'master':
        return 'rocket';
      case 'develop':
        return 'code';
      case 'release':
        return 'truck';
      case 'featureOne':
      case 'featureTwo':
        return 'lab';
      default:
        return;
    }
  }

  renderListUpdate(update) {
    const iconName = this.getUpdateIcon(update);
    return (
      <List.Item key={update.y}>
        <List.Icon name={iconName} verticalAlign="middle" />
        <List.Content>{update.content}</List.Content>
      </List.Item>
    );
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Button
                icon="backward"
                onClick={() => this.handleBackwardClick(this.state)}
              />
              <Button
                icon="forward"
                onClick={() => this.handleForwardClick(this.state, mockUpdates)}
              />
              <Button
                onClick={() => this.handlerResetClick(this.state)}
                content="reset"
              />
              <List>
                {this.state.updates &&
                  this.state.updates
                    .filter(update => update.popup)
                    .map(update => this.renderListUpdate(update))}
              </List>
            </Grid.Column>
            <Grid.Column width={11} textAlign="center">
              <Flow updates={this.state.updates} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
