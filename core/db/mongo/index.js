/* TODO: Need to connect mongo to react somehow, because
*   this is not server side app and we can't just attach db to it
*   Possible solution: to connect with express
*   https://stackoverflow.com/questions/29506814/mongoose-connect-undefined-is-not-a-function */
const mongoose = require('mongoose');
const logger = require('../../util/log').logger;
const config = require('../../config/config');

logger.info('Connecting to mongo');

mongoose.connect(config.mongoose_connection_string,
    {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (err) => logger.error("Error connecting to mongo", err));

db.once("open", () => logger.debug("Successfully connected to mongo"));