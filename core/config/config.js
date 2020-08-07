/**
 * @prop {Config} dev
 * @prop {Config} prod
 */
const config = {
    dev: {
        mongoose_connection_string: 'mongodb://localhost:27017/Upgrade',
    },
    prod: {
        mongoose_connection_string: ''
    }
}

if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'dev';
}

console.log('Loading config, ENV:', process.env.NODE_ENV);

/**
 * @type {Config}
 */
const config_env = config[process.env.NODE_ENV];

module.exports = config_env;