const express = require('express');
const app = express();
const port = 7000;

// setting template engine
app.set("view engine", "ejs");

//middleware
const checkWorkingHours = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  // checking if it's Monday to Friday and between 9am to 5pm
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour <= 17) {
    next();
  } else {
    res.render("Sorry we only work Monday to Friday, 9am to 5pm");
  }
};
app.use(checkWorkingHours);

//Defining routes
app.get("/", (req, res) => {
  res.render("Home");
});
app.get("/Service", (req, res) => {
  res.render("Service");
});
app.get("/Contact", (req, res) => {
  res.render("Contact");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})