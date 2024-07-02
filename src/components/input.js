import * as React from 'react';
import TextField from '@mui/material/TextField';
import {useTheme} from "next-themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme,
        }
    });

export default function TextFieldComponent(props) {
    const { theme} = useTheme()

    return (
        <ThemeProvider theme={customTheme(theme)}>
            <TextField {...props} />
        </ThemeProvider>
    );
}
