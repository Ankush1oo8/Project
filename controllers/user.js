const User = require("../models/user.js");


module.exports.renderSignup = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.signupUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "YOU HAVE REGISTERED!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.loginUser = async (req, res) => {
  req.flash("success", "LOGIN SUCCESSFULLY!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged out SUCCESSFULLY!!");
    res.redirect("/listings");
  });
};
