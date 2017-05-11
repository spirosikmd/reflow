import React, { PureComponent } from 'react';
import Flow from './Flow';
import updates from './updates';
import { Button, Grid } from 'semantic-ui-react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      updates: [],
      step: 0
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
      step: 0
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Button
                icon="backward"
                onClick={() => this.handleBackwardClick(this.state)}
              />
              <Button
                icon="forward"
                onClick={() => this.handleForwardClick(this.state, updates)}
              />
              <Button
                onClick={() => this.handlerResetClick(this.state)}
                content="reset"
              />
            </Grid.Column>
            <Grid.Column width={12} textAlign="center">
              <Flow updates={this.state.updates} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
