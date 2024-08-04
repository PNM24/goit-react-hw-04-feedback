import style from './statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    state: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <div className={style.statistics}>
        <h2 className={style.statistics_title}>Statistics</h2>
        <ul className={style.statistics_list}>
          {Object.entries(this.props.state).map(([key, value]) => {
            return (
              <li className={style.statistics_item}>
                <span
                  className={style.statistics_name}
                >
                  {key}:{' '}
                </span>
                <span>{value}</span>
              </li>
            );
          })}
          <li className={style.statistics_item}>
            <span>Total: </span>
            <span>{this.props.total}</span>
          </li>
          <li className={style.statistics_item}>
            <span>Positive feedback: </span>
            <span>
              {this.props.positivePercentage}%
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;