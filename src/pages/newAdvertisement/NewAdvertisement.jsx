import CloseIcon from '@mui/icons-material/CloseOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Stack, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addAdvertisement } from '../../api/advertisementsApi';

const NewAdvertisement = () => {
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [price, setPrice] = useState('');
    const [rooms, setRooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [living_sqft, setLivingSqft] = useState('');
    const [other_details, setOtherDetails] = useState('');

    const navigate = useNavigate();
    const notify = () => toast.success('Advertisement Created Successfully');

    const queryClient = useQueryClient();

    const addAdvertisementMutation = useMutation(addAdvertisement, {
        onSuccess: () => {
            queryClient.invalidateQueries('advertisements');
            navigate('/advertisements');
            notify();
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
            addAdvertisementMutation.mutate({
                city: city.trim(),
                address: address.trim(),
                zip: zip.trim(),
                price: +price.trim(),
                rooms: +rooms.trim(),
                bathrooms: +bathrooms.trim(),
                living_sqft: +living_sqft.trim(),
                other_details: other_details.trim(),
            });
        }
    };

    return (
        <Stack sx={{ alignItems: 'center' }}>
            <Box
                sx={{ display: 'flex', flexWrap: 'wrap', pt: 4, width: '50%' }}
            >
                <Typography
                    variant='h2'
                    component='h2'
                    width='100%'
                    textAlign='center'
                    mb={2}
                >
                    Create a new Advertisement
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
                                <InputAdornment position='start'>
                                    $
                                </InputAdornment>
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
                    <Stack
                        direction='row'
                        spacing={16}
                        sx={{
                            width: '96%',
                            mt: 1,
                            pl: 1,
                        }}
                    >
                        <Button
                            sx={{ width: '60%', p: 1 }}
                            size='medium'
                            variant='outlined'
                            color='error'
                            onClick={() => navigate(-1)}
                            startIcon={<CloseIcon />}
                        >
                            Cancel
                        </Button>
                        <Button
                            sx={{ width: '60%', p: 1 }}
                            size='medium'
                            type='submit'
                            variant='outlined'
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Stack>
    );
};

export default NewAdvertisement;
