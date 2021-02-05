var app = require("./app");
const { success } = require("consola");
const { PORT } = require("./config/dotenv");

app.listen(PORT, () => {
  success({ message: `SERVER STARTED ON PORT ${PORT}`, badge: true });
});