let users = [
  { id: "1", name: "John Doe", email: "john@example.com", age: 28 },
  { id: "2", name: "Jane Smith", email: "jane@example.com", age: 32 },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", age: 45 },
  { id: "4", name: "Alice Brown", email: "alice@example.com", age: 24 },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", age: 37 }
];

let nextId = 6;

const createUser = async (data) => {
  const user = { id: String(nextId++), ...data };
  users.push(user);
  return user;
};

const getUsers = async () => {
  return users;
};

const getUserById = async (id) => {
  return users.find((u) => u.id === id) || null;
};

const updateUser = async (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

const deleteUser = async (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  const deleted = users.splice(index, 1);
  return deleted[0];
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};