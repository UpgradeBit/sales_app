require('../db/mongo');
const config = require('../config/config');
const logger = require('../util/log').logger;
const util = require('util');
const express = require('express');
const sales_app = express();
const User = require('../domain').User;

sales_app.get('/', (req, res) => {
    res.send('Hello World!')
});

sales_app.post('/users/signup', (req, res) => {
   console.log('body: ', req.body);
   console.log('res body: ', res.body);
   res.end('Got message');
});

sales_app.listen(config.port, config.host, () => {
    logger.debug(util.format('Server listens on http://%s:%s',
        config.host, config.port));
});