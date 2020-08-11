/**
 * @prop {Config} dev
 * @prop {Config} prod
 */
const config = {
    development: {
        mongoose_connection_string: 'mongodb://localhost:27017/Upgrade',
        host: 'localhost',
        port: '4000',
        server: 'https://fcc192406aaf.ngrok.io',
        webClientId: '602987445566-jem28mveou4a4dkleatssgqd1us13mve.apps.googleusercontent.com',
        vkAppId: 7564311
    },
    production: {
        mongoose_connection_string: '',
        host: '',
        port: '',
        server: '',
        webClientId: '',
        vkAppId: ''
    }
}

if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'development';
}

console.log('Loading config, ENV:', process.env.NODE_ENV);

/**
 * @type {Config}
 */
const config_env = config[process.env.NODE_ENV];

module.exports = config_env;