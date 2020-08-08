const logger = require('../util/log').logger;
const config = require('../config/config');

/**
 * SignUp  to app
 * @param {Object} options
 * @param {string} options.email - users email
 * @param {string} options.password - users password
 * @param {string} options.passwordConfirm - confirmation of password
 */
function SignUp(options){
    const errors = {};

    errors['email'] = !options?.email? "Email address can't be empty": null;
    errors['password'] = !options?.password? "Password can't be empty": null;
    errors['passwordConfirm'] = !options?.passwordConfirm? "Password confirmation can't be empty": null;

    if (errors.email && errors.password && errors.passwordConfirm)
        return errors;
    else if (options?.password !== options?.passwordConfirm)
    {
        errors['passwordMismatch'] = "Passwords doesn't match";
        return errors;
    }

    logger.debug('Email: ' + options?.email);
    logger.debug('Password: ' + options?.password);
    logger.debug('Confirmation: ' + options?.passwordConfirm);

    const fetch_options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: options.email,
          password: options.password
        })
    };

    const url = config.server + '/users/signup';

    logger.debug('URL: ', url);

    fetch(url, fetch_options)
        .catch(err => logger.debug('Error sending info: ' + err));
}

module.exports = {
    SignUp
}