"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import AlarmIcon from "@mui/icons-material/Alarm";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ButtonComponent from "@/components/button";
import SettingsIcon from '@mui/icons-material/Settings';
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

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    ...theme.typography.body2,
    color: 'var(--color)',
}));

export default function MenuComponent() {
    const { theme} = useTheme()

    return (
        <ThemeProvider theme={customTheme(theme)}>
            <Box sx={{ my: 5 }}>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 5,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <ButtonComponent label="Home" startIcon={<RestoreIcon />} sx={{ p: 2 }} />
                            <ButtonComponent label="Configuração" startIcon={<SettingsIcon />} sx={{ p: 2 }} />
                        </Grid>
                    </Grid>
                </StyledPaper>
            </Box>
        </ThemeProvider>
    );
}
