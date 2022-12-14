import PropTypes from 'prop-types';
import { StyledIconButton } from './IconButton.styled';

export const IconButton = ({ children, icon, onClick, isLoading }) => {
  return (
    <StyledIconButton disabled={isLoading} onClick={onClick}>
      {icon}
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node,
  onclick: PropTypes.func,
  isLoading: PropTypes.bool,
};