import { Router } from "express";
import userBookController from "../controller/userBook.controller.js";


const userBookRouter = Router();

const controller = new userBookController();

userBookRouter.post("/borrow",
    (req, res) => controller.borrowController(req, res)
);

userBookRouter.post("/return", 
    (req, res) => controller.returnController(req, res)
);

userBookRouter.get("/borrowed",
    (req, res) => controller.borrowedController(req, res)
);

export default userBookRouter;