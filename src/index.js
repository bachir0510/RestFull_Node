const app = require("./app");
require("./database");

app.listen(app.get("port"));
console.log("Running on port", app.get("port"));
