const { router } = require('microrouter');
const microCors = require('micro-cors');
const Movies = require('./Movies');

module.exports = microCors()(
    router(
        ...Movies,
    )
)