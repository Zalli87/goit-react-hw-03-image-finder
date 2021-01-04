import React, { Component } from 'react';
import pixabayAPI from '../../serveses/pixabay-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button';
import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';

export default class SearchInfo extends Component {

   state = {
        status: 'idle',
        images: [],
        error: null,
        page: 1,
    };

    componentDidUpdate(prevProps, prevState) {
        
        const prevImgQery = prevProps.imageQuery;
        const nextImgQuery = this.props.imageQuery;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevImgQery !== nextImgQuery) {
       this.setState({
                status: 'pending',
                images: [],
                page: 1,
            });

            pixabayAPI
                .fetchImage(nextImgQuery, nextPage)
                .then(images => {
                    if (images.hits.length === 0) {
                        return Promise.reject(
                            new Error(
                                `No images found on request ${nextImgQuery}`,
                            ),
                        );
                    }

                    this.setState({
                        images: images.hits,
                        status: 'resolved',
                    });
                })
                .catch(error => this.setState({ error, status: 'rejected' }))
                .finally(this.scroll);
        }

        if (prevPage !== nextPage && prevPage < nextPage) {
            this.setState({ status: 'pending' });

            pixabayAPI
                .fetchImage(nextImgQuery, nextPage)
                .then(images => {
                    this.setState(prevState => ({
                        images: [...prevState.images, ...images.hits],
                        status: 'resolved',
                    }));
                })
                .catch(error => this.setState({ error, status: 'rejected' }))
                .finally(this.scroll);
        }
    }

    updatePage = () => {
        this.setState(({ page }) => ({
            page: page + 1,
        }));
    };

    scroll = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight - 1500,
            behavior: 'smooth',
        });
    };

    render() {
        const { status, error, images } = this.state;

        if (status === 'idle') {
            return <p>What you want fuond?</p>;
        }

        if (status === 'pending') {
            return <Loader/>;
        }

        if (status === 'resolved') {
            return (
                <>
                    <ImageGallery images={images} />
                    <Button onClick={this.updatePage} />
                </>
            );
        }

        if (status === 'rejected') {
            return <p>{error.message}</p>;
        }
    }
}

SearchInfo.propTypes = {
    imageQuery: PropTypes.string.isRequired,
};

