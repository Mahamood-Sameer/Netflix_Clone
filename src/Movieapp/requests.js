const API_KEY = "f9498b3fbd83450039a119fb2800b2dd";


const requests = {
     Trending : `/trending/all/week?api_key=${API_KEY}&language=en-US` ,
     NetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     Toprated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     Action : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
     Comedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     Horror : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     Romance : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     Documentries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}



export default requests
