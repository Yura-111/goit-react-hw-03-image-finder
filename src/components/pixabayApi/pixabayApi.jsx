import PropTypes from 'prop-types';

export const pixabayApi = async (searchQuerry, page) => {
  const response = await fetch(
        `https://pixabay.com/api/?q=${searchQuerry}&page=${page}&key=30543774-85dcbe3a92a7223df43425301&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`Can't find ${searchQuerry}`));
};

pixabayApi.propTypes = {
  searchQuerry: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
