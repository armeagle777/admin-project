import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { Box, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateAdvertisement } from '../../api/advertisementsApi';

const EditForm = ({ advertisement }) => {
    const [city, setCity] = useState(advertisement.city);
    const [address, setAddress] = useState(advertisement.address);
    const [zip, setZip] = useState(advertisement.zip);
    const [price, setPrice] = useState(advertisement.price.toString());
    const [rooms, setRooms] = useState(advertisement.rooms.toString());
    const [bathrooms, setBathrooms] = useState(
        advertisement.bathrooms.toString()
    );
    const [living_sqft, setLivingSqft] = useState(
        advertisement.living_sqft.toString()
    );
    const [other_details, setOtherDetails] = useState(
        advertisement.other_details
    );

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const updateAdvertisementMutation = useMutation(updateAdvertisement, {
        onSuccess: () => {
            console.log('success');
            queryClient.invalidateQueries('advertisements');
            navigate('/advertisements');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            city &&
            address &&
            zip &&
            !isNaN(price.trim()) &&
            !isNaN(rooms.trim()) &&
            !isNaN(bathrooms.trim()) &&
            !isNaN(living_sqft.trim()) &&
            other_details
        ) {
            updateAdvertisementMutation.mutate({
                city: city.trim(),
                address: address.trim(),
                zip: zip.trim(),
                price: +price.trim(),
                rooms: +rooms.trim(),
                bathrooms: +bathrooms.trim(),
                living_sqft: +living_sqft.trim(),
                other_details: other_details.trim(),
                id: advertisement.id,
            });
        }
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', pt: 4, width: '50%' }}>
            <Typography
                variant='h2'
                component='h2'
                width='100%'
                textAlign='center'
                mb={2}
            >
                Update Advertisement N {advertisement.id}
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label='Price'
                    id='price'
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>$</InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label='Rooms'
                    id='rooms'
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    required
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label='Bathrooms'
                    id='bathrooms'
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label='Living SqFt'
                    id='living_sqft'
                    value={living_sqft}
                    onChange={(e) => setLivingSqft(e.target.value)}
                    required
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label='City'
                    id='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label='Zip Code'
                    id='zip'
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    label='Address'
                    id='address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    sx={{ m: 1, width: '95%' }}
                />
                <TextField
                    id='other_details'
                    label='Other Details'
                    value={other_details}
                    onChange={(e) => setOtherDetails(e.target.value)}
                    multiline
                    required
                    maxRows={4}
                    sx={{ width: '95%', m: 1 }}
                />
                <Button
                    sx={{ width: '95%', m: 1, p: 1 }}
                    size='medium'
                    type='submit'
                    variant='outlined'
                    startIcon={<SaveIcon />}
                >
                    Update
                </Button>
            </form>
        </Box>
    );
};

export default EditForm;
