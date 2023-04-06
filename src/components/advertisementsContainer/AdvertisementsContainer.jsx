import { useState } from 'react';
import { Grid, Stack } from '@mui/material';

import Card from '../card';
import Pagination from '../pagination';
import Modal from '../modal';

const AdvertisementsContainer = ({
    advertisements,
    totalCount,
    setPageNumber,
    pageNumber,
}) => {
    const [modalInfo, setModalInfo] = useState({ open: false, itemId: null });

    const handleOpen = (id) => setModalInfo({ open: true, itemId: id });
    const handleClose = () => setModalInfo({ open: false, itemId: null });

    const pagesCount = Math.ceil(totalCount / 10);

    const handleChangePage = (_, newPage) => {
        setPageNumber(newPage);
    };

    return (
        <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, sm: 4, md: 12 }}
        >
            {advertisements.map((ad) => (
                <Grid item key={ad.id}>
                    <Card info={ad} handleOpen={handleOpen} />
                </Grid>
            ))}
            <Stack alignItems='center' width='100%' mt={2}>
                <Pagination
                    currentPage={pageNumber}
                    count={pagesCount}
                    onChange={handleChangePage}
                />
            </Stack>
            <Modal
                isOpen={modalInfo.open}
                itemId={modalInfo.itemId}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </Grid>
    );
};

export default AdvertisementsContainer;
