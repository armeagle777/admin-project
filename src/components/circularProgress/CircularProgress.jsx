import Progress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularProgress = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
            }}
        >
            <Progress />
        </Box>
    );
};

export default CircularProgress;
