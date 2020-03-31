import React, {Component} from 'react';
import moment from 'moment';
import {TimePicker} from 'material-ui-pickers';

export default class TimePickers extends Component {
  state = {
    selectedDate: moment(),
  };

  handleDateChange = (date) => {
    this.setState({selectedDate: date});
    this.props.parentHora(date.format('h:mm:ss'))
  };

  render() {
    const {selectedDate} = this.state;
    return (<div key="basic_time" className="picker" margin='normal'> 

      <TimePicker
        fullWidth
        margin='normal'
        value={selectedDate}
        onChange={this.handleDateChange}
      />
    </div>)
  }
}