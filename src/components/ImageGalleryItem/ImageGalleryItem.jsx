import PropTypes from "prop-types";
import css from './ImageGalleryItem.module.css'
 

 export const ImageGalleryItem = ({webformatURL, largeImageURL, showLargeImg}) => {

     return (
         <>
             <li onClick={()=>{showLargeImg(largeImageURL)}} className={css.imageGalleryItem}><img  className={css.imageGalleryItemImage} src={webformatURL} alt="" /></li>
         </>
   )

}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired
}