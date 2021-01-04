import PropTypes from 'prop-types';

const API_KEY = '9056490-f67ac46e342f0369ec0e655c9';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

function fetchImage(imageQuery, page) {
    return fetch(
        `${BASE_URL}&q=${imageQuery}&page=${page}&per_page=12&key=${API_KEY}`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(
            new Error(`No images found on request ${imageQuery}`),
        );
    });
}

const pixabayAPI = {
    fetchImage,
};

fetchImage.propTypes = {
    imageValue: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

export default pixabayAPI;