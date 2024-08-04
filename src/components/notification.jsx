import style from './notificacion.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return (
      <h2 className={style.notification}>
        {this.props.message}
      </h2>
    );
  }
}

export default Notification;