import style from './feedback.module.css';
import React, { Component  } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
    static defaultProps = {
      options: [],
    };
    static propTypes = {
      options: PropTypes.array.isRequired,
      leaveFeedback: PropTypes.func.isRequired,
    };
  
    render() {
      return (
        <div className={style.feedback}>
          <h1 className={style.title}>Please leave Feedback</h1>
          <div>
            {this.props.options.map(btn => (
              <button
                className={style.feedback_button}
                value={btn}
                key={btn}
                type="button"
                onClick={e => this.props.leaveFeedback(e)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default Feedback;