import React from 'react';
import styles from './CircleSpinner.less';
import withStyles from '../../decorators/withStyles';


@withStyles(styles)
class CircleSpinner {
  render() {
    return (
      <div className="spinner circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default CircleSpinner;
