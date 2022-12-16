import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IconButton } from 'components/IconButton/IconButton';
import { StyledBar, StyledForm, StyledInput, Styledlabel } from './Searchbar.styles';


export class SearchBar extends Component {
  static propTypes = {
      isLoading: PropTypes.bool.isRequired,
  };

  state = {
    searchInput: '',
  };

  handleInputChange = evt => {
    this.setState({
      searchInput: evt.currentTarget.value,
    });
  };

  handleSubmit = evt => {
    const { searchInput } = this.state;
    evt.preventDefault();

    if (searchInput.trim() === '') {
      toast.info('Please, enter your search term', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (this.props.searchQuerry === searchInput.trim()) {
      toast.info(
        `The images you requested ${this.props.searchQuerry} have already been found and displayed`,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      this.setState({
        searchInput: '',
      });

      return;
    }

    this.props.onSubmit(searchInput.trim());

    this.setState({
      searchInput: '',
    });
  };

  render() {
    const { searchInput } = this.state;
    const { isLoading } = this.props;

    return (
      <StyledBar>
        <StyledForm onSubmit={this.handleSubmit}>
          <Styledlabel htmlFor="search">Search</Styledlabel>
          <StyledInput
            onChange={this.handleInputChange}
            value={searchInput}
            name="search"
            autoComplete="off"
          ></StyledInput>
          <IconButton
            isLoading={isLoading}
            type="submit"
            aria-label="Search button"
            icon={<FaSearch size={24} />}
          ></IconButton>
        </StyledForm>
      </StyledBar>
    );
  }
}



// SearchBar.propType = {
//   isLoading: PropTypes.bool.isRequired,
// };