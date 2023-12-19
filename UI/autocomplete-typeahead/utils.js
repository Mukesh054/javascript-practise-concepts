export async function getSuggestion(value) {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await data.json();
  return res
    .map((item) => item.name)
    .filter(
      (x) => x.substr(0, value.length).toLowerCase() === value.toLowerCase()
    );
}
