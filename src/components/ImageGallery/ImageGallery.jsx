import PropTypes from 'prop-types';
import { StyledGallery } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
    return <StyledGallery>{children}</StyledGallery>;
};

ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
};