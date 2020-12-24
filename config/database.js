module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // srv: env.bool('DATABASE_SRV', false),
        // port: env.int('DATABASE_PORT', 27017),
        // database: env('DATABASE_NAME', 'company-strapi'),
        // username: env('DATABASE_USERNAME', 'vfa_thinhtt'),
        // password: env('DATABASE_PASSWORD', 'vfa_thinhtt'),
      },
      options: {
        // authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        // ssl: env.bool('DATABASE_SSL', false),
        ssl: true
      },
    },
  },
});
