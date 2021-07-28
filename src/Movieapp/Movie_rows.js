// import { LocalConvenienceStoreOutlined } from '@material-ui/icons'
import React, { Component } from 'react'
import instance from './axios'
import "./Movie_rows.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
class Movie_rows extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            url: "https://images.tmdb.org/t/p/original/",
            trailerURL:""
        }
    }

    clickHandler = (movie)=>{
        if(this.state.trailerURL){
            this.setState({
                trailerURL:""
            })
        }
        else{
            movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name|| "").then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                this.setState({
                    trailerURL:urlParams.get('v')
                })
            }).catch((error)=>{console.log(error)})
        }
    }



    
    componentDidMount() {
        instance.get(this.props.fetchURL).then((result) => {
            this.setState({
                movies: result.data.results
            })
            console.log(result.data.results)
        })
    }



    render() {


        const opts = {
            height: '390',
            width: '340',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };


        return (
            <div className="movie__row_container">
                <h3>{this.props.title}</h3>
                <div className="movie__rows">
                    {
                        this.state.movies.map((movie) => {
                            return (

                                <img src={`${this.state.url}${this.props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={this.props.isLarge ? "Large_postre" : "movie__poster"} key={movie.id}  onClick={()=>{this.clickHandler(movie)}} ></img>

                            )
                        })
                    }
                </div>
                <div className="video">

                {this.state.trailerURL && <YouTube videoId={this.state.trailerURL} opts={opts}></YouTube>}
                </div>
            </div>
        )
    }
}

export default Movie_rows
