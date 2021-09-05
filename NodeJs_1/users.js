const fs = require("fs").promises;
function listUsers() {
  fs.readFile("./data.json").then((res) => console.log(JSON.parse(res)));
}
function getUser(id) {
  fs.readFile("./data.json").then((res) => {
    const data = JSON.parse(res);
    const user = data.find((el) => el.id === id);
    if (!user) {
      console.log("User is not defined...");
    } else {
      console.log(user);
    }
  });
}
function createUser(username, password) {
  fs.readFile("./data.json").then((res) => {
    const contacts = JSON.parse(res);
    const newContact = {
      id: contacts.length + 1,
      user: username,
      pw: password,
    };
    contacts.push(newContact);
    fs.writeFile("./data.json", JSON.stringify(contacts));
  });
}
function deleteUser(id) {
  fs.readFile("./data.json").then((res) => {
    const data = JSON.parse(res);
    const result = data.filter((user) => user.id !== id);

    fs.writeFile("./data.json", JSON.stringify(result));
  });
}
module.exports = {
  listUsers,
  createUser,
  getUser,
  deleteUser,
};
