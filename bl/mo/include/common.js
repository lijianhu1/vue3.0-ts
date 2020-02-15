exports.activeUrl = function (req, res, next) {
  res.locals.activeNav = function (nav) {
    var result = '';
    var _path = req.path;
    if (nav == _path) {
      result = 'cur';
    } else {
      result = '';
    }
    return result;
  };
  next();
};