const express = require("express");
const userController = require("./controllers/user");
const postController = require("./controllers/post");
const addModels = require("./middleware/add-models");
const checkAuthentication = require("./middleware/check-authentication");

const Router = express.Router();
Router.use(addModels);

Router.patch("/posts/:id", postController.update);

Router.get("/cookieCounter", (req, res) => {
  const { session } = req;
  session.viewCount = (session.viewCount || 0) + 1;
  res.status(200).send({ count: session.viewCount });
});

// Create
Router.post("/users", userController.create);
Router.post("/users/login", userController.login);
Router.post("/posts", postController.create);

// Read
Router.get("/users", userController.list);
Router.get("/users/:id", userController.show);
Router.get("/me", userController.showMe);

// Update
Router.patch("/posts/:id", postController.update);
Router.patch("/posts/rate/:id", postController.updateRating);
Router.patch("/users/:id", checkAuthentication, userController.update);

// Delete
Router.delete("/users/logout", userController.logout);
Router.delete("/posts/:id", postController.deletePost);

module.exports = Router;
