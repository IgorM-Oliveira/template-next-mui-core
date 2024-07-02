"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import styles from "@/app/page.module.css";
import Box from '@mui/material/Box';
import {FormControl} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextFieldComponent from "@/components/input";
import CheckboxComponent from "@/components/checkbox";
import ButtonComponent from "@/components/button";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    boxShadow: 'none',
    maxWidth: 400,
    color: 'var(--color)',
}));

export default function Login() {
    const [formData, setFormData] = useState({
        user: '',
        password: '',
        remember: false,
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log(formData);
    };

    return (
        <div className={styles.center}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                        }}
                    >
                        <Typography
                            variant="h2"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                alignItems: 'center',
                            }}
                        >
                            Vision
                        </Typography>
                        <VisibilityIcon sx={{ fontSize: 100 }} />
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        Entrar
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        Faça login para acessar o painel de decisões
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        Obrigado por voltar ao Esus Join, vamos começar? Acesse seu painel de decisões.
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                        }}
                    >
                        <FormControl fullWidth sx={{ my: 1 }}>
                            <TextFieldComponent defaultValue={formData.user} onChange={handleChange} fullWidth name="user" label="CPF" variant="outlined" />
                        </FormControl>
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                        }}
                    >
                        <FormControl fullWidth sx={{ my: 1 }}>
                            <TextFieldComponent defaultValue={formData.password} onChange={handleChange} fullWidth name="password" label="Senha" variant="outlined"/>
                        </FormControl>
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel control={<CheckboxComponent value={formData.remember} onChange={handleChange} name="remember"/>} label="Lembrar-me" />
                        </FormGroup>
                    </StyledPaper>
                    <StyledPaper
                        sx={{
                            my: 1,
                            mx: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        <ButtonComponent type="submit" variant="contained" fullWidth label='Salvar'/>
                    </StyledPaper>
                </Box>
            </form>
        </div>
    );
}
