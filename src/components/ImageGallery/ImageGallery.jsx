import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";



export const ImageGallery = ({items, showLargeImg}) => {
 
    const elements = items.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} webformatURL={webformatURL} showLargeImg={showLargeImg} largeImageURL={largeImageURL} />)
   
return(
        <>
        <ul className={css.imageGallery}>
            {elements}
        </ul>
        </>
    )
}

ImageGallery.defaultProps = {
    items:[],
}

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })).isRequired,
    showLargeImg: PropTypes.func.isRequired
}