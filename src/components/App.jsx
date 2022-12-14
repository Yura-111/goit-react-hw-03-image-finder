import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { pixabayApi } from 'components/pixabayApi/pixabayApi';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { AppStyled } from './App.styled'


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
            this.setState({ isMoreBtnHide: true });
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
      isLoading: true,
      isMoreBtnHide: false,
    });
  };

  handleMoreSearch = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
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
        {images.length > 0 && (
          <ImageGallery>
            {images.map(image => (
              <ImageGalleryItem key={image.id} image={image} />
            ))}
          </ImageGallery>
        )}
        {isLoading && (
          <AppStyled display="flex" marginTop="20px" justifyContent="center">
            <TailSpin
              height="60"
              width="60"
              color="#3f51b5"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
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
