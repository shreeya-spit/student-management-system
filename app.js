function login(user) {
  if (user.type === "student") {
    return "Student Portal";
  }
  return "Not Allowed";
}

module.exports = login;
