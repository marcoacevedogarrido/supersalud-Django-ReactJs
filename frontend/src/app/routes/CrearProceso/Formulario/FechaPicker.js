import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker } from 'material-ui-pickers';


const FechaPicker = ({ parentDia }) => {

  const [selectedDate, setSelectedDate] = useState(moment())

  const handleDateChange = (date) => {
    setSelectedDate(date)

    parentDia(date.format('YYYY-MM-DD'))
  }

  return (
    <div key="basic_day" className="picker">
      <DatePicker
        fullWidth
        margin='normal'
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling={false}
        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
      />
    </div>
  )
}


export default FechaPicker