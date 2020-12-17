const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USER +
    ":" +
    process.env.DB_PASS +
    "@" +
    process.env.DB_HOST +
    "?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Countdown = mongoose.model("Countdown", {
  id: String,
  date: String,
  title: String,
  description: String,
});

createCountdown = (newCountdown) => {
  if (
    newCountdown.title == null &&
    newCountdown.title == "" &&
    newCountdown.title == null &&
    newCountdown.date == ""
  ) {
    return Error("Data invalid");
  }
  return new Promise((resolve, reject) => {
    Countdown.create(newCountdown, function (error, countdown) {
      if (error) return reject(Error("Data invalid"));
      return resolve(countdown._id);
    });
  });
};

findCountdown = (_id) => {
  if (_id === null || typeof _id === "undefined") return Error("Error on db");

  return new Promise((resolve, reject) => {
    Countdown.findOne({ _id }, function (error, countdown) {
      if (error) return reject(Error("Error on db"));
      console.log(countdown);
      if (countdown == null) return reject(Error("This URL not exist"));
      else return resolve(countdown);
    });
  });
};

module.exports = {
  Countdown,
  createCountdown,
  findCountdown,
};
