import userService from "../service/user.service.js";

class userController {
    constructor() {
        this.service = new userService();
    };
    async addUserController(req, res) {
        try {
            const body = req.body;
            const goAddUser = this.service.addUser(body);
            if (goAddUser) {
                res.status(200).json({
                    message: "Successful"
                });
            };
        } catch (error) {
            console.error(error.message);
        };
    };
    async getController(req, res) {
        try {
            const param = await this.service.getUserService();
            res.status(200).json(param);
        } catch (error) {
            res.status(400).json({
                message: "Error with service"
            });
        };
    }
};

export default userController;