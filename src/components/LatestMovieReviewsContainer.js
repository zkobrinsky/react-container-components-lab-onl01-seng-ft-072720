import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import MovieReview from './MovieReview'



export default class LatestMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    componentDidMount () {
        const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

        fetch(URL)
        .then(resp => resp.json())
        .then(movieData => {
            this.setState({
                reviews: movieData.results
            })
        })

    }

    render () {
        return (
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}


