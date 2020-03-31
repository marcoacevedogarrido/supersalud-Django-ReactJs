import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';
import InputLabel from '@material-ui/core/InputLabel';

export default class DatePickers extends Component {
  state = {
    dia: '',
  };

  handleDateChange = (date) => {
    this.setState({ dia: date });
    this.props.parentDia(date.format('YYYY-MM-DD'))
  };

  render() {
    const { dia } = this.props;
    return (
      <Fragment>
        <InputLabel htmlFor="periocidad">Dia</InputLabel>
        <div key="basic_day" className="picker">
          <DatePicker
            fullWidth
            value={moment(dia, 'YYYY-MM-DD')}
            onChange={this.handleDateChange}
            animateYearScrolling={false}
            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
          />
        </div>
      </Fragment>
    )
  }
}