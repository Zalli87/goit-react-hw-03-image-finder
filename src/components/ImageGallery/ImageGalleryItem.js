import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { webformatURL, tag, largeImageURL } = this.props;

        return (
            
                <li className={s.ImageGalleryItem}>
                <img
                        src={webformatURL}
                        alt={tag}
                        className={s.ImageGalleryItemImage}
                        onClick={this.toggleModal}
                    />
                    {showModal && (
                        <Modal
                            onClose={this.toggleModal}
                            tag={tag}
                            largeImageURL={largeImageURL}
                        />
                    )}
                </li>
          
        );
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;



