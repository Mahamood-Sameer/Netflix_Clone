
import React, { Component , PureComponent} from 'react'
import instance from './axios'
import "./Movie_rows.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

class Movie_rows extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            url: "https://images.tmdb.org/t/p/original/",
            trailerURL: "",
            classname: `movie__rows ${this.props.title}`,
            calssname__nav_front: `Arrows ${this.props.title}`,
            calssname__nav_back: `Arrows ${this.props.title}`,
            open: false
        }
    }

    clickHandler = (movie) => {
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        }

        if (this.state.trailerURL !== "") {
            this.setState({
                trailerURL: ""
            })

        }
        if (this.state.trailerURL === "") {
            movieTrailer(movie?.name || movie?.title || movie?.original_title || movie?.original_name || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                this.setState({
                    trailerURL: urlParams.get('v')
                })

            }).catch((error) => { alert(error.message) })
        }

    }



    componentDidMount() {
        instance.get(this.props.fetchURL).then((result) => {
            this.setState({
                movies: result.data.results
            })
        })

    }



    render() {


        const opts = {
            height: '390',
            width: '390',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };


        return (
            <div className="movie__row_container">
                <h3>{this.props.title}</h3>
                <div className={this.state.classname}>
                    {
                        this.state.movies.map((movie) => {
                            return (
                                <>
                                    <img src={`${this.state.url}${this.props.isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={this.props.isLarge ? "Large_postre" : "movie__poster"} key={movie.id} onClick={() => { this.clickHandler(movie) }} ></img>

                                    {/* Dialouge Boxes */}


                                    {
                                        (this.state.trailerURL && this.state.open===true) &&
                                        <div className="video">
                                            {
                                                console.log()
                                            }
                                            <Dialog open={this.state.open} onClose={() => {
                                                this.setState({
                                                    open: false
                                                })
                                            }}>
                                                <DialogTitle>Trailer</DialogTitle>
                                                <DialogContent>
                                                    {this.state.trailerURL && <YouTube videoId={this.state.trailerURL} opts={opts}></YouTube>}
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => {
                                                        this.setState({
                                                            trailerURL: "",
                                                            open: false,
                                                        })
                                                    }}>Cancel</Button>
                                                </DialogActions>
                                            </Dialog>
                                        </div>
                                    }

                                </>
                            )
                        })
                    }
                </div>

                <div className="navigationArrows">
                    <ArrowBackIcon className={this.state.calssname__nav_back} onClick={() => {
                        if (this.props.title === "NETFLIX ORIGINALS") {
                            document.querySelector('.NETFLIX').scrollBy(-650, 0)
                        }
                        else {
                            document.querySelector(`.${this.props.title}`).scrollBy(-650, 0)
                        }
                    }} />
                    <ArrowForwardIcon className={this.state.calssname__nav_front} onClick={() => {
                        if (this.props.title === "NETFLIX ORIGINALS") {
                            document.querySelector('.NETFLIX').scrollBy(650, 0)
                        }
                        else {
                            document.querySelector(`.${this.props.title}`).scrollBy(650, 0)
                        }
                    }} />
                </div>

            </div>
        )
    }
}

export default Movie_rows
