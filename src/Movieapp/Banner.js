import React, { Component } from 'react'
import './Banner.css'
import instance from './axios'
import requests from './requests'


class Banner extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movie : ''
        }
    }
    
    componentDidMount(){
        instance.get(requests.NetflixOriginals).then((result)=>{
            let random=(Math.floor(Math.random() * (19-0)))
            this.setState({
                movie:result.data.results[random]
            })
            console.log(this.state.movie)
        })
    }
    
    render() {
        return (
            <div className="banner"
                style={{
                    backgroundSize : "cover",
                    backgroundImage:`url(https://images.tmdb.org/t/p/original/${this.state.movie.backdrop_path})`,
                    backgroundPosition:"center center"
                }}
                >
                <div className="banner__content">
                        <h1 className="banner__title">{this.state.movie?.title || this.state.movie?.name || this.state.movie?.original_name}</h1>
                        <div className="banner_buttons">
                            <button className="banner_button">Play</button>
                            <button className="banner_button">My List</button>
                        </div>
                        <h3 className="banner__description">{this.state.movie.overview}</h3>
                </div>
                <div className="banner_fadeBottom"></div>
            </div>
        )
    }
}

export default Banner

