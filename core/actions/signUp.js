const logger = require('../util/log').logger;
const config = require('../config/config');
const bcrypt = require('../security');

/**
 * SignUp  to app
 * @param {Object} options
 * @param {string} options.email - users email
 * @param {string} options.password - users password
 * @param {string} options.passwordConfirm - confirmation of password
 * @param {function} done
 */
function SignUp(options, done){
    const errors = {};

    errors['email'] = !options?.email? "Email address can't be empty": null;
    errors['password'] = !options?.password? "Password can't be empty": null;
    errors['passwordConfirm'] = !options?.passwordConfirm? "Password confirmation can't be empty": null;

    if (errors.email || errors.password || errors.passwordConfirm)
        done(errors);
    else if (options?.password !== options?.passwordConfirm)
    {
        errors['passwordMismatch'] = "Passwords doesn't match";
        done(errors);
    }
    else{
        logger.debug('Email: ' + options?.email);
        logger.debug('Password: ' + options?.password);
        logger.debug('Confirmation: ' + options?.passwordConfirm);

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(options.password, salt);

        const fetch_options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: options.email,
                password: hash
            })
        };

        const url = config.server + '/users/signup';

        logger.debug('URL: ', url);

        fetch(url, fetch_options)
            .then(res => {
                if (res.status === 400)
                {
                    logger.debug('User already exists');
                    errors['userExists'] = 'User already exists';
                }

                done(errors);
            })
            .catch(err => {
                logger.debug('Error sending info: ' + err);
            });
    }
}

module.exports = {
    SignUp
}