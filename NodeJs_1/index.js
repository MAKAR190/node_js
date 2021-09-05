const { program } = require("commander");
const { listUsers, getUser, createUser, deleteUser } = require("./users");
//* JSON.parse(res) or res.toString()
// fs.readFile("./data.json").then((res) => console.log(res.toString()));

// console.log(__dirname);

program
  .option("-a, --action <type>", "Choose action")
  .option("-i, --id <type>", "User ID")
  .option("-u, --username <type>", "Username")
  .option("-p, --password <type>", "Password");
program.parse(process.argv);

const argv = program.opts();

switch (argv.action) {
  case "list":
    listUsers();
    break;
  case "get":
    getUser(Number(argv.id));
    break;
  case "delete":
    deleteUser(Number(argv.id));
    break;
  case "create":
    createUser(argv.username, argv.password);
    break;
  default:
    break;
}
