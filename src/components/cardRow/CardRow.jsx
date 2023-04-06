import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CardRow = ({ label, text, siblingLabel, siblingText }) => {
    return (
        <Stack direction='row'>
            <Typography
                variant='body2'
                color='text.secondary'
                noWrap
                sx={{ fontWeight: 'bold' }}
            >
                {`${label}: `}
            </Typography>
            <Typography variant='body2' color='text.secondary' noWrap ml={1}>
                {text}
            </Typography>
            {siblingLabel && (
                <>
                    <Divider orientation='vertical' flexItem sx={{ ml: 1 }} />
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        noWrap
                        sx={{ fontWeight: 'bold' }}
                    >
                        {`${siblingLabel}: `}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        noWrap
                        ml={1}
                    >
                        {siblingText}
                    </Typography>
                </>
            )}
        </Stack>
    );
};

export default CardRow;
