import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import * as React from 'react';


const theme = createMuiTheme({
    palette: {
        primary: {
        dark: lightBlue[700],
        light: lightBlue[300],
        main: lightBlue[500]        
        },
    secondary: {
        dark: green[700],
        light: green[300],
        main: green[500],        
        }
    }
});  


function withRoot(Component:React.ComponentType) {
    function WithRoot(props:object) {
        // MuiThemeProvider makes the theme available down the React tree
        // thanks to React context.
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;
