import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    tag={tags}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object.isRequired),
    };

export default ImageGallery;