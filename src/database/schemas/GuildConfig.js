const mongoose = require('mongoose');
const { Schema } = mongoose;

const GuildConfigSchema = new Schema({
	guildId: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model('GuildConfig', GuildConfigSchema);
