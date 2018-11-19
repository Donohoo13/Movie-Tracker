const db = require('monk')('mongodb://teamCaptain:teamCaptain1@ds037407.mlab.com:37407/alabama-chuncksters-db');

module.exports = db;