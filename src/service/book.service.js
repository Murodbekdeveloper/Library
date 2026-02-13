import bookSchema from "../models/book.model.js";
class bookService {
    constructor() {
        this.model = bookSchema;
    };
    async addBookService(body) {
        const lastBook = await this.model.findOne().sort({ id: -1 });
        const newId = lastBook ? Number(lastBook.id) + 1 : 1;

        const book = await this.model.create({
            ...body,
            id: newId
        });

        return book;
    };
    queryFilter(query) {
        const filter = [];
        for (let key in query) {
            const obj = {};
            obj[key] = {
                $gte: +query[key],
            };
            filter.push(obj);
        };
        return filter;
    };

    async getBookService(query) {
        const queryParam = new Set(Object.entries(query));
        if (queryParam.size >= 1) {
            const queryFiltered = this.queryFilter(query);
            const allBook = await this.model.find({
                $and: queryFiltered,
            });
            return allBook;
        };
        const book = await this.model.find();
        return book;
    };
    async searchBook(id) {
        const searchId = await this.model.findOne({ id });
        return searchId;
    };
    async editBook(id, body) {
        const updateBook = await this.model.findOneAndUpdate(
            { id },
            body,
            { new: true }
        );
        return updateBook;
    };
    async deleteBook(id) {
        const deletedBook = await this.model.findOneAndDelete({id});
        return deletedBook;
    };

};



export default bookService;