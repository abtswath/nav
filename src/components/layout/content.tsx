import { Container } from '@mui/material';
import React from 'react';

interface ContentProps {
    children: React.ReactNode
}

export default (props: ContentProps) => {
    return (
        <Container sx={{ pt: 2 }}>
            {props.children}
        </Container>
    );
};
