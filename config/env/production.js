/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'someMongodbServer'
  },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: process.env.OPENSHIFT_NODEJS_PORT || 8080,

  host: process.env.OPENSHIFT_NODEJS_IP,

  session: {
    adapter: 'mongo',
    host: process.env.OPENSHIFT_MONGODB_DB_HOST || 'localhost',
    port: process.env.OPENSHIFT_MONGODB_DB_PORT || 27017,
    username: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
    password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
    db: 'open',
    collection: 'sessions'
  },

  gulp: {
    _hookTimeout: 200000
  },

  orm: {
    _hookTimeout: 200000
  },

  views: {
    _hookTimeout: 200000
  },

  pubsub: {
    _hookTimeout: 200000
  }


  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  //log: {
  //  level: "silent"
  //}

};
