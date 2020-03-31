import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { TimePicker } from 'material-ui-pickers';
import InputLabel from '@material-ui/core/InputLabel';

export default class TimePickers extends Component {
  state = {
    hora: '',
  };

  handleDateChange = (date) => {
    this.setState({ hora: date });
    this.props.parentHora(date.format('h:mm:ss'))
  };

  render() {
    const { hora } = this.props;
    return (
      <Fragment>
        
        <InputLabel htmlFor="periocidad">Hora</InputLabel>
        <div key="basic_time" className="picker">
          <TimePicker
            fullWidth
            value={moment(hora, 'h:mm:ss')}
            onChange={this.handleDateChange}
          />
        </div>
      </Fragment>)
  }
}