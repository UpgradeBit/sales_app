require('../db/mongo');
const config = require('../config/config');
const logger = require('../util/log').logger;
const util = require('util');
const express = require('express');
const sales_app = express();
const jsonParser = express.json();
const User = require('../domain').User;

sales_app.get('/', (req, res) => {
    res.send('Hello World!')
});

sales_app.post('/users/signup', jsonParser, (req, res) => {
   console.log('body: ', req.body);
   const newUser = new User({email: req.body.email,
                                password: req.body.password});

   newUser.save((err, user) => {
       if (err)
       {
           logger.debug(err);
           res.status(400);
           res.end();
       }else{
           logger.debug("User saved: " + req.body.email);
           res.end();
       }
   })
});

sales_app.listen(config.port, config.host, () => {
    logger.debug(util.format('Server listens on http://%s:%s',
        config.host, config.port));
});