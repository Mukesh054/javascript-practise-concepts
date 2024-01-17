import { TableInfo } from "./components/table.js";

customElements.define("table-info", TableInfo);

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return users;
}

const data = await getUsers();
const tableInfoComponent = document.getElementById("table-info-id");
const result = data.map((item) => {
    return [item.id, item.name, item.username, item.email];
  });
tableInfoComponent.items = result;
tableInfoComponent.headers = ["Id", "Name", "Username", "Email"];
