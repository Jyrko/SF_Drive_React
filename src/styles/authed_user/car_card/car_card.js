import { createTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

export const availabilityTheme = createTheme({
  palette: {
    primary: green,
    main: "#ffffff",
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
        width: "450px"
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
