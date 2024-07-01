"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "@/app/page.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {useTheme} from "next-themes";
import ThemeChanger from "@/components/theme";

const message = `Criação`;

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    // border: 'none',
    // boxShadow: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.mode === 'dark' ? 'white' : 'blue',
}));

export default function Login() {
    return (
        <div className={styles.center}>
            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography noWrap>{message}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{message}</Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </Box>

            <ThemeChanger />

        </div>
    );
}
