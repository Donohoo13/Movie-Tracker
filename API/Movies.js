const { send,json } = require ('micro');
const { get, post, put, del } = require('microrouter');
const db = require ('./DataConfig');

const Movies = db.get('Movies')

getMovies = async (req, res) => {
    const result = await Movies.find({}).then( results => ( results ) )
    send( res, 200, result);
}

//GET only movies you've seen a number of times.  don't know how I'd use this but it's cool.
getMoviesBySeen = async (req, res) => {
    let result = await Movies.find({}).then( results => ( results ) )
    // console.log("search: ", req.params.seen)
    result = await result.filter(movies => movies.seen >= req.params.seen)
    send(res, 200, result);
}

//GET Movies by name
getMoviesByName = async (req, res) => {
    let result = await Movies.find({}).then( results => ( results ) )
    // console.log("PreFilter: ", result)
    result = await result.filter(movie => movie.title.toLowerCase().includes(req.params.title.toLowerCase()))
    // console.log("PostFilter: ", result)
    send(res, 200, result);
}

//POST new movie to DB {"title": "", "releaseDate": "", "genre": [], "actors": [], "seen": Number, "image": ""}
addMovie = async (req, res) => {
    const body = await json(req)
    let result = await Movies.insert(body).then( results => results )
    send(res, 200, result)
}

module.exports = [
    get('/movies', getMovies),
    get('/movies/seen/:seen', getMoviesBySeen),
    get('/movies/title/:title', getMoviesByName),
    post('/movies', addMovie)

]