import React, { useState } from 'react';

import '~/styles/authed_user/car_search.scss';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { searchTheme } from '~/styles/authed_user/car_search';

export default function CarSearch(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function onStartDatePicker(date) {
    setSelectedDate(date);
  }

  return (
    <section className="rent_car_search">
      <form className="rent_car_search_form">
        <input type="text" className="rent_car_search_form_text_input" placeholder="Местоположение"/>
        <ThemeProvider theme={searchTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              onChange={onStartDatePicker}
              value={selectedDate}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
        <input type="text" className="rent_car_search_form_text_input" placeholder="Категория"/>
        <button type="submit">Найти</button>
      </form>
    </section>
  )
}
