// require("dotenv").config();

// const app = require("./app");
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`server listening to port ${port}`);
// });

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: ".env.test" });
} else {
  require("dotenv").config();
}

const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
