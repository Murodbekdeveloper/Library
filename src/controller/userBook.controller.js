import userBookService from "../service/user-book.service.js";

class userBookController {
    constructor() {
        this.service = new userBookService();
    };
    async borrowController(req, res) {
        try {
            const { userId, bookId } = req.body;
            const borrowed = await this.service.borrowBook(userId, bookId);
            if (borrowed) {
                res.status(201).json({
                    message: "Success",
                });
            };
        } catch (error) {
            console.error(error.message);
        };
    };
    async returnController(req, res) {
        try {
      const { borrowId } = req.body; 

      const result = await this.service.returnBook(borrowId);

      res.status(200).json({
        message: "Book returned successfully",
        data: result
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    };
    async borrowedController(req, res) {
        try {
      const borrowedBooks = await this.service.borrowedBook();
      res.status(200).json(borrowedBooks);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    };
};

export default userBookController;
