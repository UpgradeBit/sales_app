const logger = require('../util/log').logger;

/**
 * Login to app
 * @param {Object} options
 * @param {string} options.email - users email
 * @param {string} options.password - users password
 * @param {function} done
 */
function login(options, done){
    const errors = {};

    errors['email'] = !options?.email? "Email address can't be empty": null;
    errors['password'] = !options?.password? "Password can't be empty": null;

    logger.debug('Email: ' + options?.email);
    logger.debug('Password: ' + options?.password);

    done(errors);
}

module.exports = {
    login
}