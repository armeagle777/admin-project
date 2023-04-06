import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertBox = ({ errorMessage }) => {
    return (
        <Stack sx={{ width: '100%' }}>
            <Alert severity='error'>{errorMessage}</Alert>
        </Stack>
    );
};

export default AlertBox;
