import express from "express";
import UsersController from "../Controllers/UsersController.js"; // Correct path

const UserRouter = express.Router();

UserRouter.get('/', UsersController.getList);
UserRouter.get('/:id', UsersController.getUserById);
UserRouter.put('/:id', UsersController.updateUser);
UserRouter.delete('/:id', UsersController.deleteUser);
UserRouter.post('/', UsersController.addUser);

export default UserRouter;
