import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  StyledGalleryImage,
  StyledGalleryItem,
  ModalImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  // handleBackdropClick = evt => {
  //   if (evt.currentTarget === evt.target) {
  //     this.handleToggleModal();
  //   }
  // };

  render() {
    const { isModalOpen } = this.state;
    const { image } = this.props;
    return (
      <>
        <StyledGalleryItem onClick={this.handleToggleModal}>
          <StyledGalleryImage src={image.webformatURL} alt={image.tags} />
        </StyledGalleryItem>
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal}>
            <ModalImage src={image.largeImageURL} alt={image.tags} />
          </Modal>
        )}
      </>
    ) ;
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

