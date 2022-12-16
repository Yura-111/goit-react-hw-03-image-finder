import { Component } from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from './Modal.styled';
import { AppStyled } from 'components/App.styled';

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
};


  componentDidMount() {
    window.addEventListener('keydown', this.handleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscPress);
  }

  handleEscPress = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Backdrop onClick={this.handleBackdropClick}>
        <AppStyled boxShadow="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;">
          {children}
        </AppStyled>
      </Backdrop>);
    
  }
}