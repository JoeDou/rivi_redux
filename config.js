var getConfig = function() {
  return {
    MONGO_CREDENTIALS: process.env.MONGO_CREDENTIALS || 'mongodb://localhost/rivi_redux',
  };
};

exports.getConfig = getConfig;
