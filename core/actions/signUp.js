const logger = require('../util/log').logger;
const User = require('../domain').User;

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

    const newUser = new User({email: options.email,
                                password: options.password});

    logger.debug('new User: ', newUser);

    // newUser.save((err, user) => {
    //     if (err)
    //         logger.error('Error saving user: ', err);
    //
    //     logger.debug('User saved: ', user.email);
    // });
}

module.exports = {
    SignUp
}