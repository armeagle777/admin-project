import { useNavigate } from 'react-router-dom';
import MediaCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DollarIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getRandomSrc } from '../../helpers/helperFunctions';
import CardRow from '../cardRow';

const Card = ({ info, handleOpen }) => {
    const navigate = useNavigate();

    const randomSrc = getRandomSrc();

    const {
        city,
        address,
        zip,
        price,
        rooms,
        bathrooms,
        living_sqft,
        other_details,
        id,
    } = info;

    return (
        <MediaCard sx={{ width: 265 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={randomSrc}
                title='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {price}
                    <DollarIcon color='primary' />
                </Typography>

                <CardRow label='Address' text={address} />
                <CardRow label='City' text={city} />
                <CardRow label='Index' text={zip} />
                <CardRow
                    label='Rooms'
                    text={rooms}
                    siblingLabel='Bathrooms'
                    siblingText={bathrooms}
                />
                <CardRow label='Living SqFt' text={living_sqft} />
                <CardRow label='Details' text={other_details} />
            </CardContent>
            <CardActions>
                <Button
                    size='small'
                    variant='outlined'
                    onClick={() => navigate(`/edit-advertisement/${id}`)}
                    startIcon={<EditIcon />}
                >
                    Edit
                </Button>
                <Button
                    size='small'
                    variant='outlined'
                    color='error'
                    startIcon={<DeleteIcon />}
                    onClick={() => handleOpen(id)}
                >
                    Delete
                </Button>
            </CardActions>
        </MediaCard>
    );
};

export default Card;
