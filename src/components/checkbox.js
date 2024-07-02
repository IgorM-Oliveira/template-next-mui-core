import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {useTheme} from "next-themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme,
        }
    });


export default function CheckboxComponent(props) {
    const { theme} = useTheme()
    return (
        <ThemeProvider theme={customTheme(theme)}>
            <Checkbox {...props} />
        </ThemeProvider>
    );
}
