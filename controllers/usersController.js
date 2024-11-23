const db = require("../db/queries");

async function getUsernames(req,res) {
  
  const usernames = await db.getAllUsernames();
  res.send("Usernames: "+ usernames.map(user=>user.username).join(", "))
}

exports.usersListGet = (req, res) => {
  res.send("works?");
};

async function createUsernameGet(req, res) {
  // render the form
  res.render("createNewUser")
}


async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/"); 
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
}