import axios from 'axios'
import {React, Component} from 'react'

export default class Cast extends Component {
    state = {
        cast:[]
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
        const res = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a4de692f1b0678dfae28764090f39212`)

        this.setState({cast: res.data.cast})
    }
    

    render() {
        return (
            <>
                {this.state.cast.map(res => 
                        <li key={res.cast_id}>
                            <img src={`https://image.tmdb.org/t/p/w500${res.profile_path}`} alt={res.name} width={120}/>
                            <p>{res.name}</p>
                            <p>{res.character}</p>
                        </li>
                    )
                }
            </>
        )
    }
}