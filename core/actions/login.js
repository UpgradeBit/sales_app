const logger = require('../util/log').logger;
const config = require('../config/config');
const bcrypt = require('../security');
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import VKLogin from 'react-native-vkontakte-login';

GoogleSignin.configure({
    webClientId: config.webClientId
});

VKLogin.initialize(config.vkAppId);

/**
 * Login to app
 * @param {Object} options
 * @param {string} options.email - users email
 * @param {string} options.password - users password
 * @param {function} done
 */
function login(options, done) {
    const errors = {};

    errors['email'] = !options?.email ? "Email address can't be empty" : null;
    errors['password'] = !options?.password ? "Password can't be empty" : null;

    logger.debug('Email: ' + options?.email);
    logger.debug('Password: ' + options?.password);

    if (errors.email || errors.password)
        done(errors);
    else {
        const fetch_options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: options.email
            })
        };

        const url = config.server + '/users/login';

        logger.debug('URL: ' + url);

        fetch(url, fetch_options)
            .then(res => {
                if (res.status === 401) {
                    logger.debug('User not found');
                    errors['wrongEmail'] = 'User is not registered yet';
                    done(errors);
                }else{
                    res.json().then(data => {
                        if(bcrypt.compareSync(options.password, data.hash))
                            logger.debug('Authorized');
                        else
                        {
                            logger.debug('Wrong password');
                            errors['wrongPassword'] = 'wrong password';
                        }
                        done(errors);
                    });
                }
            })
            .catch(err => {
                logger.error('Error sending info: ' + err);
            });
    }
}

function loginGoogle() {
    GoogleSignin.hasPlayServices()
        .catch(err => logger.error(err));

    GoogleSignin.signIn()
        .then(userInfo => {
            logger.debug('User info: ', userInfo);
        })
        .catch(err => {
            if (err.code === statusCodes.SIGN_IN_CANCELLED) {
                logger.error(err);
            } else if (err.code === statusCodes.IN_PROGRESS) {
                logger.error(err);
            } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                logger.error(err);
            } else {
                logger.error(err);
            }
        });
}

async function loginVK() {
    VKLogin.isLoggedIn()
        .then(userInfo => {
            logger.debug('User info: ', userInfo);
        });

    VKLogin.login(['friends', 'email', 'photos'])
        .then(user => {
            logger.debug('Info', user);
        })
        .catch(err => logger.error(err));

}


module.exports = {
    login,
    loginGoogle,
    loginVK
}
