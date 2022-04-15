import React, { useState } from 'react';

import '~/styles/authed_user/car_search.scss';

import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import ruLocale from "date-fns/locale/ru";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { searchTheme } from '~/styles/authed_user/car_search';

export default function CarSearch(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState("Kyiv");

  function onStartDatePicker(date) {
    setSelectedStartDate(date);
  }

  function onEndDatePicker(date) {
    setSelectedEndDate(date);
  }

  function onCityChange(e) {
    setSelectedCity(e.target.value);
  }

  return (
    <section className="rent_car_search">
      <form className="rent_car_search_form">
        <TextField
          className="rent_car_search_form_text_input"
          variant="outlined"
          label="Location"
          value={selectedCity}
          onChange={onCityChange}
        />
        <ThemeProvider theme={searchTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <KeyboardDatePicker
              disableToolbar
              disablePast
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Rental start date"
              onChange={onStartDatePicker}
              value={selectedStartDate}
              className="rent_car_search_form_date_picker"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              disablePast
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="End date of the lease"
              onChange={onEndDatePicker}
              value={selectedEndDate}
              className="rent_car_search_form_date_picker"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
        <FormControl variant="outlined">
          <InputLabel id="category-select">Category</InputLabel>
          <Select labelId="category-select" label="Category" defaultValue="0" variant="outlined">
            <MenuItem value="0">Cars</MenuItem>
          </Select>
        </FormControl>
        <a href="/authed/car-search-results">Find</a>
      </form>
    </section>
  )
}
