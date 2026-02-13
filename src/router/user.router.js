import { Router } from "express";
import userController from "../controller/user.controller.js";

const userRouter = Router();
const controller = new userController();

userRouter.post("/addUser", 
    (req, res) => controller.addUserController(req, res)
);
userRouter.get("/getAll", 
    (req, res) => controller.getController(req, res)
);
export default userRouter;