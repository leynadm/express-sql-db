exports.usersListGet = (req, res) => {
  res.send("works?");
};

exports.createNewUser = (req, res) => {
    res.render("createNewUser", {
      title: "Create user",
    });
  };

exports.saveNewUser = (req, res) => {
  res.send("Saving user");
};
