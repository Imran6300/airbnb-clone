module.exports.Get404 = (req, res) => {
  res.status(404).render("errors/404", { title: "404 Not Found" });
};
