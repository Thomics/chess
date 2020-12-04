module.exports = require('express')
	.Router()
	.use('/api/health', require('./health.ts'));
