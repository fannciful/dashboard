import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#14171c',
      paper: '#1a1d23',
    },
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#7c3aed',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
    },
    divider: '#2a2e35',
  },
  typography: {
    fontFamily: "'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
    h6: {
      fontSize: '18px',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#14171c',
          margin: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1d23',
          boxShadow: 'none',
          borderBottom: '1px solid #2a2e35',
        },
      },
    },
  },
});

export default theme;