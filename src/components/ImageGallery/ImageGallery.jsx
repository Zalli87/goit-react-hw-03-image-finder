import css from "./ImageGallery.module.css";
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