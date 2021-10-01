const time = (req, res, next) => {
  var today = new Date();
  var time = today.getHours();
  var day = today.getDay();
  if (time >= 8 && time <= 17 && day >= 1 && day <= 5) {
    next();
  } else {
    res.send("back tommorow , hours : 8h-17h ");
  }
};

module.exports = time;
