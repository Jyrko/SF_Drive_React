import { createTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export const searchTheme = createTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#f48fb1',
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        border: "1px solid #E0E0E0",
        borderRadius: "6px",
      }
    },
    MuiIconButton: {
      root: {
        disableRipple: true,
        color: "primary"
      }
    }
  }
})
