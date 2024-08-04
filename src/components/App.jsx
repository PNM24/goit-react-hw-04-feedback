import React, { Component } from 'react';
import Feedback from './feedback';
import Statistics from './statistics';
import Notification from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const currentBtnValue = e.currentTarget.value;
    this.setState(prevState => ({
      ...prevState,
      [currentBtnValue]: prevState[currentBtnValue] + 1,
    }));
  };

  countFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };
  countZero = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  countPercentage = () => {
    return Math.round((this.state.good / this.countFeedback()) * 100);
  };

  render() {
    const buttons = Object.keys(this.state);
    return (
      <div className="App">
        <section>
          <Feedback
            options={buttons}
            leaveFeedback={this.leaveFeedback}
          />
          {this.countZero() ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              state={this.state}
              total={this.countFeedback()}
              positivePercentage={this.countPercentage()}
            />
          )}
        </section>
      </div>
    );
  }
}