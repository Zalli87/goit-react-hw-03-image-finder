import { Component } from "react";
import css  from "./ImageGallery.module.css";

export class ImageGallery extends Component {
    state = {
        items: []
    }

    render() {
        const { items } = this.state;
        const elements = items.map(({ id, webformatURL, largeImageURL }) => <li key={id} className={css.imageGalleryItem}><img src={webformatURL} alt="" /></li>)
        return(
        <ul className={css.imageGallery}>
            {elements}
        </ul>
)    
}
}