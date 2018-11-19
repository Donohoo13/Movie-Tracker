const { send } = require ('micro');
const { get, post, put, del } = require('microrouter');
const db = require ('./DataConfig');

const Movies = db.get('Movies')

const getMovies = async (req, res) => {
    const result = await Movies.find({}).then( results => ( results ) )
    send( res, 200, result);
}

getMoviesBySeen = async (req, res) => {
    let result = await Movies.find({}).then( results => ( results ) )
    console.log("search: ", req.params.seen)
    result = await result.filter(movies => movies.seen >= req.params.seen)
    send(res, 200, result);
}

module.exports = [
    get('/movies', getMovies),
    get('/movies/seen/:seen', getMoviesBySeen)

]