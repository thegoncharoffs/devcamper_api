// @desc        Logs requests to console
logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocall}://${req.get('host')}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
