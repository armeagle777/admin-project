import BasicPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagination = ({ currentPage, onChange, count }) => {
    return (
        <Stack spacing={2}>
            <BasicPagination
                page={currentPage}
                count={count}
                color='primary'
                onChange={onChange}
            />
        </Stack>
    );
};

export default Pagination;
