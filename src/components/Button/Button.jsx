import PropTypes from 'prop-types';
import { StyledButton } from './Button.syled';

export const Button = ({ text, onClick, isLoading }) => {
  return (
    <StyledButton onClick={onClick} disabled={isLoading}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  isLoading: PropTypes.bool,
};
