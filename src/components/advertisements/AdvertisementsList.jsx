import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Stack from '@mui/material/Stack';

import { getAdvertisements } from '../../api/advertisementsApi';

import AlertBox from '../alertBox';
import AdvertisementsContainer from '../advertisementsContainer';
import CircularProgress from '../circularProgress';

const AdvertisementsList = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const {
        isLoading,
        isError,
        error,
        data: advertisements,
    } = useQuery(
        ['advertisements', pageNumber],
        () => getAdvertisements(pageNumber),
        {
            keepPreviousData: true,
        }
    );

    let content;
    if (isLoading) {
        content = <CircularProgress />;
    } else if (isError) {
        content = <AlertBox errorMessage={error.message} />;
    } else {
        content = (
            <AdvertisementsContainer
                advertisements={advertisements.data}
                totalCount={advertisements.totalCount}
                setPageNumber={(pg) => setPageNumber(pg)}
                pageNumber={pageNumber}
            />
        );
    }

    return (
        <Stack mt={3} spacing={2}>
            {content}
        </Stack>
    );
};

export default AdvertisementsList;
