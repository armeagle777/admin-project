import { Box, Grid, Stack, Typography } from '@mui/material';

import Card from '../card';
import Pagination from '../pagination';

const Table = ({ advertisements, totalCount, setPageNumber, pageNumber }) => {
    const pagesCount = Math.ceil(totalCount / 10);

    const handleChangePage = (event, newPage) => {
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
                    <Card info={ad} />
                </Grid>
            ))}
            <Stack alignItems='center' width='100%' mt={2}>
                <Pagination
                    currentPage={pageNumber}
                    count={pagesCount}
                    onChange={handleChangePage}
                />
            </Stack>
        </Grid>
    );
};

export default Table;
