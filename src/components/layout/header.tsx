import { Container, AppBar, Toolbar, SvgIcon, Typography } from '@mui/material';
import { CollectionsBookmark } from '@mui/icons-material';

export default () => {
    return (
        <AppBar position='static'>
            <Container>
                <Toolbar>
                    <SvgIcon sx={{ mr: 2 }}>
                        <CollectionsBookmark />
                    </SvgIcon>
                    <Typography variant="h6" component="div">
                        书签
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
