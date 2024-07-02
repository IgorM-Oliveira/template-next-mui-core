import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function CardComponent(props) {
    return (
        <Box>
            <Card {...props}>{props.children}</Card>
        </Box>
    );
}
