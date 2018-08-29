const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const newsSchema = new Schema({
	country: {type: Object},
	news: {type: Object}
});

module.exports = mongoose.model('news', newsSchema);
