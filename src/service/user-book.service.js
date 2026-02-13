
import { modelData } from "../models/user-book.model.js";
class userBookService {
    constructor() {
        this.model = modelData;
    };
    async borrowBook(userId, bookId) {
        const lastBook = await this.model.findOne().sort({ id: -1 });
        const newId = lastBook ? Number(lastBook.id) + 1 : 1;
        const borrow = await this.model.create({ id: newId, userId, bookId});
        return borrow;
    };
    async returnBook(borrowId) {
        const returned =  this.model.findByIdAndUpdate(
      borrowId,
      { returnDate: new Date() },
      { new: true }
    );
    return returned;
    };
    async borrowedBook() {
        return this.model.find({ returnDate: null })
    }
};

export default userBookService;