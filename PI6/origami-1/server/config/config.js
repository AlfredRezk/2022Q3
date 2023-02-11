const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb+srv://alfred:12345@cluster0.mb0zl7k.mongodb.net/origami',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];