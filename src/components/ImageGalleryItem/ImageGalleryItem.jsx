import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import {
  StyledGalleryImage,
  StyledGalleryItem,
  ModalImage,
} from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
};

  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL,
      tags,
      largeImageURL } = this.props;
    return (
      <>
        <StyledGalleryItem onClick={this.handleToggleModal} >
          <StyledGalleryImage src={webformatURL} alt={tags} />
        </StyledGalleryItem>
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    ) ;
  }
}
