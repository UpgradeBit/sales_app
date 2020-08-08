const mongoose = require('mongoose');
const logger = require('../../util/log').logger;
const config = require('../../config/config');

logger.info('Connecting to mongo');

mongoose.connect(config.mongoose_connection_string,
    {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (err) => logger.error("Error connecting to mongo", err));

db.once("open", () => logger.debug("Successfully connected to mongo"));