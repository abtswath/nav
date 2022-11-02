import Grid from '@mui/material/Unstable_Grid2';
import { Box, Paper, Tooltip, Typography } from '@mui/material';
import { Nav } from './types';
import React, { useState } from 'react';
import Icon from './icon';

interface TilesProps {
    navs: Nav[]
}

interface TileProps {
    nav: Nav
}

const Tip = (props: { title: string, description?: string }) => {
    return (
        <React.Fragment>
            <Typography variant='caption'>{props.title}</Typography>
            {
                props.description
                    ? (
                        <Typography variant='body2'>{props.description}</Typography>
                    )
                    : null
            }
        </React.Fragment>
    );
}

const Tile = (props: TileProps) => {

    const [elevation, setElevation] = useState(0);

    const handleMouseOver = () => {
        setElevation(4);
    };

    const handleMouseOut = () => {
        setElevation(0);
    }

    return (
        <Grid xs={16} sm={8} md={6} lg={6} xl={6}>
            <Tooltip title={<Tip title={props.nav.title} description={props.nav.description} />} placement='top'>
                <Paper component='a' href={props.nav.url} target="_blank" sx={{ p: 1, textDecoration: 'none', display: 'block' }} elevation={elevation} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Icon icon={props.nav.icon} title={props.nav.title} />
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: 1, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <Typography variant='caption'>
                            {props.nav.title}
                        </Typography>
                    </Box>
                </Paper>
            </Tooltip>
        </Grid>
    );
};

export default (props: TilesProps) => {
    return (
        <Grid container spacing={4} columns={48}>
            {props.navs.map((nav, index) => (<Tile key={index} nav={nav} />))}
        </Grid>
    );
};
