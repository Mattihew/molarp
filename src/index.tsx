import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Page from "./components/Header";
import {CssBaseline} from "@material-ui/core";
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import {grey, deepOrange} from '@material-ui/core/colors';

const reactRoot = document.createElement('div');
document.body.appendChild(reactRoot);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey["700"]
        },
        secondary: deepOrange
    }
});

const app = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Page/>
            </ThemeProvider>
        </React.Fragment>
    );
};

ReactDOM.render(React.createElement(app), reactRoot);
