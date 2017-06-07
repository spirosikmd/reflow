import React, { PureComponent } from 'react';
import Flow from './Flow';
import mockUpdates from './__mocks__/updates';
import { Button, Grid, List, Select, Input } from 'semantic-ui-react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      yToAdd: 50,
      typeToAdd: 'master',
      step: 0,
      flowSteps: [[0, 8], [9, 17], [18, 24], [25, 26]],
    };

    this.actionHandlers = {
      master: this.addMasterUpdate.bind(this),
      develop: this.addDevelopUpdate.bind(this),
    };
  }

  isTheEnd(state, updates) {
    return state.step >= updates.length;
  }

  isTheStart(state) {
    return state.step === 0;
  }

  handleForwardClick(state, updates) {
    if (this.isTheEnd(state, updates)) {
      return;
    }
    let newUpdates;
    if (state.flowSteps) {
      const steps = state.flowSteps[state.step];
      if (!steps) {
        return;
      }
      newUpdates = [...state.updates, ...updates.slice(steps[0], steps[1] + 1)];
    } else {
      newUpdates = [...state.updates, updates[state.step]];
    }
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

  findLastOfType(state, type) {
    const updates = state.updates
      .filter(update => update.type === type)
      .sort((update1, update2) => update1.y < update2.y);
    return updates[0];
  }

  isFirstOfType(state, type) {
    const updates = state.updates
      .filter(update => update.type === type)
      .sort((update1, update2) => update1.y < update2.y);
    if (!updates || updates.length === 0) {
      return true;
    }
    return state.yToAdd < updates[0].y;
  }

  findFirstOfType(state, type) {
    const updates = state.updates
      .filter(update => update.type === type)
      .sort((update1, update2) => update1.y < update2.y);
    return updates[0];
  }

  addMasterUpdate(state) {
    let update = { type: state.typeToAdd, y: state.yToAdd };
    if (this.isFirstOfType(state, 'master')) {
      const firstMaster = this.findFirstOfType(state, 'master');
      if (firstMaster) {
        update = Object.assign({}, update, {
          to: [{ type: firstMaster.type, y: firstMaster.y }],
        });
      }
    } else {
      const lastMaster = this.findLastOfType(state, 'master');
      if (lastMaster) {
        update = Object.assign({}, update, {
          from: [{ type: lastMaster.type, y: lastMaster.y }],
        });
      }
    }
    const updates = [...state.updates, update];
    this.setState({ updates });
  }

  addDevelopUpdate(state) {
    let update = { type: state.typeToAdd, y: state.yToAdd };
    let from;
    if (this.isFirstOfType(state, 'develop')) {
      from = this.findLastOfType(state, 'master');
    } else {
      from = this.findLastOfType(state, 'develop');
    }
    update = Object.assign({}, update, {
      from: [{ type: from.type, y: from.y }],
    });
    const updates = [...state.updates, update];
    this.setState({ updates });
  }

  handleAddClick(state) {
    const handler = this.actionHandlers[state.typeToAdd];
    if (!handler) {
      return;
    }
    handler(state);
  }

  handleInputChange(event) {
    const y = event.target.value;
    this.setState({ yToAdd: parseInt(y, 10) || 0 });
  }

  handleSelectChange(element) {
    this.setState({ typeToAdd: element.value });
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
              <Select
                options={[
                  { value: 'master', text: 'master' },
                  { value: 'develop', text: 'develop' },
                ]}
                onChange={(event, value) => this.handleSelectChange(value)}
                value={this.state.typeToAdd}
              />
              <Input
                onChange={event => this.handleInputChange(event)}
                type="number"
                value={this.state.yToAdd}
              />
              <Button
                icon="add"
                onClick={() => this.handleAddClick(this.state)}
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
