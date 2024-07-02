"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";
import ButtonComponent from "@/components/button";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from "@mui/icons-material/Home";

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    ...theme.typography.body2,
    color: 'var(--color)',
}));

export default function MenuComponent() {
    return (
        <Box sx={{ my: 5 }}>
            <StyledPaper
                sx={{
                    my: 1,
                    mx: 5,
                }}
            >
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <ButtonComponent label="Home" startIcon={<HomeIcon />} sx={{ p: 2 }} />
                        <ButtonComponent label="Configuração" startIcon={<SettingsIcon />} sx={{ p: 2 }} />
                    </Grid>
                </Grid>
            </StyledPaper>
        </Box>
    );
}
