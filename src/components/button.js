import * as React from 'react';
import {useTheme} from "next-themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from "@mui/material/Button";

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme || useTheme(),
            primary: {
                main: '#3183FF',
            }
        }
    });

export default function ButtonComponent(props) {
    const {theme} = useTheme()

    return (
        <ThemeProvider theme={customTheme(theme)}>
            <Button {...props}>{props.label}</Button>
        </ThemeProvider>
    );
}
