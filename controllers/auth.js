module.exports.GetLogin = (req, res) => {
  res.render("auth/login", { title: "Login Page", message: "" });
};

module.exports.GetSignup = (req, res) => {
  res.render("auth/signup", { title: "Signup Page", message: "" });
};
