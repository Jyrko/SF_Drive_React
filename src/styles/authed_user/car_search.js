import { createTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export const searchTheme = createTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#f48fb1',
    },
  },
  props: {
    MuiButtonBase: {
      root: {
        disableRipple: true
      }
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        disableRipple: true,
        color: "primary"
      }
    },
    MuiFormControl: {
      root: {
        width: "293px"
      },
      marginNormal: {
        marginTop: "9px"
      }
    },
    MuiIconButton: {
      root: {
        disableRipple: true
      }
    }
  }
})
