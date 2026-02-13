import { Router } from "express";
import bookController from "../controller/book.controller.js";

const bookRouter = Router();
const controller = new bookController();

bookRouter.post("/addBook", 
    (req, res) => controller.addBookController(req, res)
);
bookRouter.get("/books", 
    (req, res) => controller.getBookController(req, res)
);
bookRouter.get("/books/:id",
    (req, res) => controller.searchController(req, res)
);
bookRouter.patch("/books/:id", 
    (req, res) => controller.editController(req, res)
);
bookRouter.delete("/books/:id", 
    (req, res) => controller.deleteBook(req, res)
);


export default bookRouter;