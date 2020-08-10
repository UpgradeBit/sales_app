require('../db/mongo');
const config = require('../config/config');
const logger = require('../util/log').logger;
const util = require('util');
const express = require('express');
const sales_app = express();
const jsonParser = express.json();
const User = require('../domain').User;

sales_app.post('/users/signup', jsonParser, (req, res) => {
   const options = {email: req.body.email,
       password: req.body.password};

    const newUser = new User(options);

   newUser.save((err, _) => {
       if (err)
       {
           logger.error(err);
           res.status(400);
           res.end();
       }else{
           logger.debug("User saved: " + req.body.email);
           res.end();
       }
   })
});

sales_app.post('/users/login', jsonParser, (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err)
            logger.error(err);

        if (!user)
            res.status(401).end();
        else if (user.password === req.body.password)
            res.status(200).end();
    });
});

sales_app.listen(config.port, config.host, () => {
    logger.debug(util.format('Server listens on http://%s:%s',
        config.host, config.port));
});