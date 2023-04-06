import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import { toast } from 'react-toastify';

import { deleteAdvertisement } from '../../api/advertisementsApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid red',
    boxShadow: 24,
    p: 4,
};

const Modal = ({ isOpen, handleClose, itemId }) => {
    const notify = () => toast.success('Advertisement Successfully deleted');

    const queryClient = useQueryClient();
    const deleteAdvertisementMutation = useMutation(deleteAdvertisement, {
        onSuccess: () => {
            queryClient.invalidateQueries('advertisements');
            handleClose();
            notify();
        },
    });

    return (
        <div>
            <BasicModal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        Delete the advertisement N{itemId} ?
                    </Typography>
                    <Stack direction='row' m={2} spacing={3}>
                        <Button
                            size='small'
                            variant='outlined'
                            color='primary'
                            startIcon={<CloseIcon />}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            size='small'
                            variant='outlined'
                            color='error'
                            startIcon={<DeleteIcon />}
                            onClick={() =>
                                deleteAdvertisementMutation.mutate({
                                    id: itemId,
                                })
                            }
                        >
                            Delete
                        </Button>
                    </Stack>
                </Box>
            </BasicModal>
        </div>
    );
};

export default Modal;
