export const getRandomSrc = (min = 1, max = 5) => {
    const imageUrls = {
        1: 'house.jpg',
        2: 'house_2.jpeg',
        3: 'house_3.jpg',
        4: 'house_4.jpg',
    };

    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const randomSrc = `src/assets/${imageUrls[randomNumber]}`;
    return randomSrc;
};
