"use client";
import styles from "@/app/page.module.css";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import BreadcrumbsComponent from "@/components/breadcrumbs";
import {CardActionArea, CardContent} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import CardComponent from "@/components/card";

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Teste() {
    return (
        <Box sx={{ px: 5 }}>
            <BreadcrumbsComponent aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="/pagina"
                >
                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Home
                </Link>
                <Link
                    underline="hover"
                    sx={{display: 'flex', alignItems: 'center'}}
                    color="inherit"
                    href="/configuracao"
                >
                    <WhatshotIcon sx={{mr: 0.5}} fontSize="inherit"/>
                    Configuração
                </Link>
            </BreadcrumbsComponent>

            <main className={styles.main}>
                <Box sx={{ p: 3 }}>
                    <Typography variant="body1" gutterBottom>
                        CONTROLE
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <CardComponent>
                                <CardActionArea sx={{ p: 2 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                            <DescriptionIcon sx={{ fontSize: 50 }} />
                                        </Typography>
                                        <Typography variant="body1" component="div">
                                            Busca Placa
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </CardComponent>
                        </Grid>
                    </Grid>
                </Box>
            </main>
        </Box>
    );
}
