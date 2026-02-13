import movieService from "../service/book.service.js";

class bookController {
    constructor() {
        this.service = new bookService();
    };
    async addBookController(req, res) {
        try {
            const body = req.body;
            const payload = await this.service.addBookService(body, query);
            if (payload) {
                res.status(200).json({
                    message: "Successful"
                });
            };
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        };
    };
    async getBookController(req, res) {
        try {
            const query = req.query;
            const book = await this.service.getBookService(query);
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({
                message: "INTERNAL SERVER ERROR"
            });
        };
    };
    async searchController(req, res) {
        try {
            const { id } = req.params;
            const param = await this.service.searchBook(id);
            res.status(200).json(param);
        } catch (error) {
            res.status(500).json({
                message: "Error with service"
            })
        };
    };
    async editController(req, res) {
        try {
            const { id } = req.params;
            const body = req.body;
            const param = await this.service.editBook(Number(id), body);
            res.status(200).json(param);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        };
    };
    async deleteBook(req, res) {
        try {
            const { id } = req.params;
            const param = await this.service.deleteBook(Number(id));
            res.status(200).json(param);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        };
    };
};

export default bookController;