import userSchema from "../models/user.model.js";


class userService {
    constructor() {
        this.userModel = userSchema;
    };
    async addUser(body) {
        const lastBook = await this.userModel.findOne().sort({ id: -1 });
        const newId = lastBook ? Number(lastBook.id) + 1 : 1;

        await this.userModel.create({
            ...body,
            id: newId
        });
        return true;
    };
    async getUserService() {
        const getUser = await this.userModel.find();
        return getUser;
    };
};

export default userService;