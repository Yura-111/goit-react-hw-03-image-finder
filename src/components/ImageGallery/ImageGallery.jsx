
import PropTypes from 'prop-types';
import { StyledGallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {
    return (
            <>
                <StyledGallery>
                {images.map(({id, webformatURL, largeImageURL, tags}) => (
                    <ImageGalleryItem             
                        key={id} 
                        largeImageURL={largeImageURL}
                        webformatURL={webformatURL}
                        tags={tags}
            />
            ))}
                </StyledGallery>
            </>
            );
        }

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
        ).isRequired,
};
