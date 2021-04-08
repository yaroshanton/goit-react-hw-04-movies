import React, { Component } from 'react'
import axios from 'axios'


class HomePage extends Component {
    state = {
        films: []
    }

    async componentDidMount() {
        const movies = await axios.get(`http://api.themoviedb.org/3/trending/movie/week?api_key=a4de692f1b0678dfae28764090f39212`)
            .then(res => res)

        this.setState({ films: movies.data.results })
    }



    render() {
        return (
            <h1> HomeView</h1 >
        )
    }
}
export default HomePage;
