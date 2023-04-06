import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getAdvertisementById } from '../../api/advertisementsApi';
import AlertBox from '../alertBox';
import CircularProgress from '../circularProgress';
import EditForm from '../editForm';

const EditAdvertisement = () => {
    const { advertisementId } = useParams();

    const {
        isLoading,
        isError,
        error,
        data: advertisement,
    } = useQuery(
        ['advertisements', advertisementId],
        () => getAdvertisementById(advertisementId),
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
        content = <EditForm advertisement={advertisement} />;
    }

    return <Stack sx={{ alignItems: 'center' }}>{content}</Stack>;
};

export default EditAdvertisement;
