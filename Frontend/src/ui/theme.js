import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // light blue
    },
    secondary: {
      main: '#66bb6a', // light green
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#111',
      secondary: '#555',
    },
  },
});

export default theme;
