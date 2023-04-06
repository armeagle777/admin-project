import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Oops! Pge does not exist.</h1>
            <p>Here are some helpful links:</p>
            <Stack direction='column'>
                <Link to='/'>Home</Link>
                <Link to='/advertisements'>Advertisements</Link>
                <Link to='/new-advertisement'>Create A New Aadvertisement</Link>
            </Stack>
        </div>
    );
};

export default NotFound;
