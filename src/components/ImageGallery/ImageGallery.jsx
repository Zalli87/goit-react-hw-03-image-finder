import { Component } from "react";
import css from "./ImageGallery.module.css";
import axios from "axios";

export class ImageGallery extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('https://pixabay.com/api/?q=cat&page=1&key=9056490-f67ac46e342f0369ec0e655c9&image_type=photo&orientation=horizontal&per_page=12')
            .then(({ data }) => {
                console.log(data.hits);
                this.setState({ items: data.hits })
            })
    }
    render() {
        
        const { items } = this.state;
        const elements = items.map(({ id, webformatURL, largeImageURL }) => <li key={id} className={css.imageGalleryItem}><img className={css.imageGalleryItemImage} src={webformatURL} alt="" /></li>)
        return(
        <ul className={css.imageGallery}>
            {elements}
        </ul>
)    
}
}