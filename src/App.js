import React from 'react';
import TaskTrackerApp from './TaskTrackerApp';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Task Tracker App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <TaskTrackerApp />
            </Container>
        </>
    );
};

export default App;
