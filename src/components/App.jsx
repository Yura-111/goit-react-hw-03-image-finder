import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { pixabayApi } from 'components/pixabayApi/pixabayApi';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { AppStyled } from './App.styled';
import { ImgSkeleton } from 'components/ImgSkeleton/ImgSkeleton';


export class App extends Component {
  state = {
    searchQuerry: null,
    page: 1,
    images: [],
    isLoading: false,
    error: null,
    isMoreBtnHide: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuerry, page } = this.state;
    if (prevState.searchQuerry !== searchQuerry || prevState.page !== page) {      
      pixabayApi(searchQuerry, page).then(data => {
    
          if (data.hits.length < 12) {
            this.setState({isLoading: true, isMoreBtnHide: true });
          }
          if (data.total === 0) {
            this.setState({ isLoading: false });
            return toast.info('Sorry, nothing was found for your search');
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            isLoading: false,
          }));
        })
        .catch(error => {
          console.log(error);
          this.setState({ error });
        });
    }
  }

  handleSubmit = searchQuerry => {
    this.setState({
      searchQuerry,
      page: 1,
      images: [],
      isMoreBtnHide: false,
    });
  };

  handleMoreSearch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, images, isMoreBtnHide, searchQuerry } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleSubmit}
            isLoading={isLoading}
            searchQuerry={searchQuerry}>          
        </SearchBar>
          <ImageGallery images={images} />
          
        {isLoading && (
          <AppStyled display="flex" marginTop="20px" justifyContent="center">
            <ImgSkeleton/>
          </AppStyled>
        )}
        {images.length > 0 && !isLoading && !isMoreBtnHide && (
          <Button text="Load More" onClick={this.handleMoreSearch} />
        )}        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
  }
}
