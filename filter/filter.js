var users = [
  { name: "mario1", premium: true },
  { name: "mario2", premium: true },
  { name: "mario3", premium: false },
  { name: "mario4", premium: true },
];

var newUsers = users.filter((item) => {
  return !item.premium;
});

users = users.filter((item) => {
  return !item.premium;
});

console.log(users)