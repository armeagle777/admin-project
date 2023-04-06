import axios from 'axios';

const advertisementsApi = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

export const getAdvertisements = async (pageNumber) => {
    const response = await advertisementsApi.get(
        `/advertisements?_limit=10&_page=${pageNumber}`
    );
    const totalCount = response.headers['x-total-count'];
    return { data: response.data, totalCount };
};

export const getAdvertisementById = async (id) => {
    const response = await advertisementsApi.get(`/advertisements/${id}`);
    return response.data;
};

export const addAdvertisement = async (advertisement) => {
    return await advertisementsApi.post('/advertisements', advertisement);
};

export const updateAdvertisement = async (advertisement) => {
    return await advertisementsApi.patch(
        `/advertisements/${advertisement.id}`,
        advertisement
    );
};

export const deleteAdvertisement = async ({ id }) => {
    return await advertisementsApi.delete(`/advertisements/${id}`, id);
};

export default advertisementsApi;
