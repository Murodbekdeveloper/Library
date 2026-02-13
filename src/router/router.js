import bookRouter from "./book.router.js";
import userRouter from "./user.router.js";
import userBookRouter from "./userBook.router.js";

const Routes = () => [bookRouter, userRouter, userBookRouter];

export default Routes;