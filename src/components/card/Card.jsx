import MediaCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DollarIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getRandomNumber } from '../../helpers/helperFunctions';
import { deleteAdvertisement } from '../../api/advertisementsApi';

const Card = ({ info }) => {
    const navigate = useNavigate();

    const imageUrls = {
        1: 'house.jpg',
        2: 'house_2.jpeg',
        3: 'house_3.jpg',
        4: 'house_4.jpg',
    };

    const randomSrc = `src/assets/${imageUrls[getRandomNumber(1, 5)]}`;

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

    const queryClient = useQueryClient();
    const deleteAdvertisementMutation = useMutation(deleteAdvertisement, {
        onSuccess: () => {
            queryClient.invalidateQueries('advertisements');
        },
    });

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
                <Typography variant='body2' color='text.secondary'>
                    {`Address: ${address}`}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {`City: ${city}`}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {`Index: ${zip}`}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {`Rooms: ${rooms} | Bathrooms: ${bathrooms}`}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {`Living sqFt: ${living_sqft} `}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {other_details}
                </Typography>
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
                    onClick={() => deleteAdvertisementMutation.mutate({ id })}
                >
                    Delete
                </Button>
            </CardActions>
        </MediaCard>
    );
};

export default Card;
