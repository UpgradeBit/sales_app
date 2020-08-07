require('./db/mongo');
const User = require('./domain').User;
const logger = require('./util/log').logger;


const me = new User({email: 'blakexxxd@gmail.com', password: '123'});

me.save((err, user) => {
    if (err)
        logger.error("Error saving user: ", user);

    logger.debug("User saved to db: ", user);
});

logger.debug('User: ', me);

