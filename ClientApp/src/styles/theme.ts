import Grey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#ff7961',
            main: '#ac373a',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        secondary: Grey,
    },
});

export default theme;