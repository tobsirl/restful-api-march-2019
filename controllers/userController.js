const userController = {};

userController.get = (req, res) => {
  res.json({ message: 'Welcome to the user controller' });
};

export default userController;
