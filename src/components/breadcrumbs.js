import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {useTheme} from "next-themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = (outerTheme) =>
    createTheme({
        palette: {
            mode: outerTheme,
            primary: {
                main: '#3183FF',
            }
        }
    });

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsComponent(props) {
    const {theme} = useTheme()

    return (
        <ThemeProvider theme={customTheme(theme)}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs {...props}>
                    {props.children}
                </Breadcrumbs>
            </div>
        </ThemeProvider>
    );
}
