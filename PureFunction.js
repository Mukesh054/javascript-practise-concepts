function findUser(users, item) {
  // Create the clone of users array and then reverse
  const reversedUsers = [...users].reverse();

  // Find the element in the cloned array
  const found = reversedUsers.find((user) => {
    return user === item;
  });

  // Return the found element
  return found;
}

let users = ["Tapas", "Alex", "John", "Maria"];
let found = findUser(users, "Maria");
console.log(found);
console.log(users);
