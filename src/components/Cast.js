import axios from 'axios'
import {React, Component} from 'react'

export default class Cast extends Component {
    state = {
        cast:''
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params
      const response = await axios.get(`http://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a4de692f1b0678dfae28764090f39212`)

      this.setState({...response.data })
    }
    

    render() {
        console.log(this.state);
        return (
            <>
          
            </>
        )
    }
}