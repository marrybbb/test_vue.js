const axios = require("axios");
export default async function getUsers() {
  const res = await axios("https://jsonplaceholder.typicode.com/users");
  return res.data;
}
