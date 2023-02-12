import { Component } from 'react';
import axios from "axios";
import { RotatingLines } from  'react-loader-spinner'
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
   
  state = {
    search: '',
    items: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImg: '',
  }

  searchImage = ({search}) => {
    this.setState({search, items:[], page:1}) 
  }

  loadMore = () => {
   this.setState(({page}) => ({page: page + 1}))
  }

  showLargeImg = (largeImageURL) => {
    this.setState({
      showModal: true,
      largeImg: largeImageURL,
      })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImg: '',
      })
  }

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if(prevState.search !== search || prevState.page !== page)
    {this.setState({ loading: true})
      axios.get(`https://pixabay.com/api/?q=${search}&page=${page}&key=9056490-f67ac46e342f0369ec0e655c9&image_type=photo&orientation=horizontal&per_page=12`)
            .then(({ data }) => 
              this.setState(({ items }) => ({
                  items: [...items, ...data.hits]
                }))).catch(({error})=> error.message).finally(() => this.setState({ loading: false}))
    }
  }
  
  render() {
    const { searchImage, loadMore, showLargeImg, closeModal } = this;
    const { items, loading, showModal, largeImg } = this.state;
      return (
        <>
          <Searchbar onSubmit={searchImage} />  
          <ImageGallery items={items} showLargeImg={showLargeImg} />
           <div style={{textAlign: "center"}}>  {loading && <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
          />}
            </div>
         {Boolean(items.length) && <Button onClick={loadMore} />}
          {showModal && <Modal close={closeModal}><img src={largeImg} alt="" /></Modal>}
    </>
  );
};
}